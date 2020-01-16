const { validationResult } = require('express-validator');

const Post = require('../models/post.model');
/**
* Get Action method
* @param { Request } req 
* @param { Response } res 
* @param {()} next 
*/
exports.getPosts = function (req, res, next) {
    res.status(200).json({
        posts: [{
            _id: '1',
            title: 'First Post',
            content: 'The first post',
            imageUrl: 'images/75229077_p0.jpg',
            creator: {
                name: 'My Name'
            },
            createdAt: new Date()
        }]
    });
}


/**
* Post Action method
* @param { Request } req 
* @param { Response } res 
* @param {(Error?)} next 
*/
exports.postCreatePost = function (req, res, next) {

    const errors = validationResult(req);
    if (!errors) {
        return res.status(422).json({
            message: 'Validation failed',
            errors: errors.array()
        });
    }


    const title = req.body.title;
    const content = req.body.content;

    const post = new Post({
        title: title,
        content: content,
        creator: { name: 'Ivan' },
        imageUrl: 'image.jpg'
    })

    post.save().then(respoce => {
        res.json({
            message: 'Post created successfully!',
            post: post
        })
    }).catch(err => console.log(err));


}