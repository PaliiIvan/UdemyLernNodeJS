/**
* Get Action method
* @param { Request } req 
* @param { Response } res 
* @param {()} next 
*/
exports.getPosts = function (req, res, next) {
    res.json({
        posts: [{
            title: 'First responce',
            content: 'Some Content'
        }]
    })
}

/**
* Post Action method
* @param { Request } req 
* @param { Response } res 
* @param {()} next 
*/
exports.postCreatePost = function (req, res, next) {
    const title = req.body.title;
    const content = req.body.content;

    res.status(200).json({
        message: 'Post created successfully',
        post: { id: new Date().toISOString(), title: title, content: content }
    })
}