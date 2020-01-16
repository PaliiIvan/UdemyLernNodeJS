const express = require('express');
const router = express.Router();
const { body } = require('express-validator')

const feedController = require('../controllers/feed.controller');


router.get('/posts', feedController.getPosts);
router.post('/posts', [
    body('title').trim().isLength({min: 5}),
    body('content').trim().isLength({min: 5})
] ,feedController.postCreatePost);


module.exports = router;