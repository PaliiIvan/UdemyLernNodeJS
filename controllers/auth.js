
exports.getLogin = (req, res, next) => {

  const isLoggedIn = req.cookies['loggedIn'];

    res.render('auth/login', {
      path: '/login',
      pageTitle: 'Login'
    });
};

exports.postLogin = (req, res, next) => {

  res.setHeader('Set-Cookie', 'loggedIn=true');
  res.redirect('/');
}