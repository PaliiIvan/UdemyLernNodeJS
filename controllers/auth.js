const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const nodemail = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const User = require('../models/user');

const transporter = nodemail.createTransport(sendgridTransport({
  auth: {
    //api_key: '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'
  }
}))

exports.getLogin = (req, res, next) => {
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    errorMessage: message
  });
};

exports.getSignup = (req, res, next) => {
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render('auth/signup', {
    path: '/signup',
    pageTitle: 'Signup',
    errorMessage: message
  });
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email: email })
    .then(user => {
      if (!user) {
        req.flash('error', 'Invalid email or password.');
        return res.redirect('/login');
      }
      bcrypt
        .compare(password, user.password)
        .then(doMatch => {
          if (doMatch) {
            req.session.isLoggedIn = true;
            req.session.user = user;
            return req.session.save(err => {
              console.log(err);
              res.redirect('/');
            });
          }
          req.flash('error', 'Invalid email or password.');
          res.redirect('/login');
        })
        .catch(err => {
          console.log(err);
          res.redirect('/login');
        });
    })
    .catch(err => console.log(err));
};

exports.postSignup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  User.findOne({ email: email })
    .then(userDoc => {
      if (userDoc) {
        req.flash('error', 'E-Mail exists already, please pick a different one.');
        return res.redirect('/signup');
      }
      return bcrypt
        .hash(password, 12)
        .then(hashedPassword => {
          const user = new User({
            email: email,
            password: hashedPassword,
            cart: { items: [] }
          });
          return user.save();
        })
        .then(result => {
          transporter.sendMail({
            to: email,
            from: 'usemy@testmail.com',
            subject: 'Signup succeded!',
            html: '<h1> Hello from email </h1>'
          })
          res.redirect('/login');
        });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};

exports.getReset = (req, res, next) => {
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }

  res.render('auth/reset', {
    path: '/reset',
    pageTitle: 'Reset Password',
    errorMessage: message
  })
}


exports.postReset = (req,res, next) => {
  crypto.randomBytes(32, (err, buffer) => {
    if(err) {
      return res.redirect('/');
    }
    const token = buffer.toString('hex');
    const email = req.body.email;

    User.findOne({
      email: email
    })
    .then(user => {
      if(!user) {
        req.flash('error', 'No account')
        return res.redirect('/reset');
      }

      user.resetToken = token;
      user.resetTokenExpiration = Date.now() + 3600000;
      return user.save()
      .then(result => {
        console.log(email);
        transporter.sendMail({
          to: email,
          from: 'udemy@testmail.com',
          subject: 'Password reset',
          html: `
            <p>Resset pass</p>
            <p>Click to reset <a href:"http://localhost:3000/reset/${token}" >Link</a> to set new pass</p>
          `
        });
        res.redirect('/');
      });
    })
    .catch(err => console.log(err));
  })
}
