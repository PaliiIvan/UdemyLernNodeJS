
/**
* Get Action method
* @param { Request } req 
* @param { Response } res 
* @param {()} next 
*/
exports.getPosts =  function (req, res, next) {
    res.status(200).json({
        posts: [{
            _id: '1',
            title: 'First Post',
            content: 'The first post',
            imageUrl: 'images/68896164_p0.jpg',
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
* @param {()} next 
*/
exports.postCreatePost = function (req, res, next) {
    const title = req.body.title;

    res.json({
        message: 'Success',
        title: title
    })
}