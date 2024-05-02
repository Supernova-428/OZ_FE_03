const path = require('path')

function getPost(req, res) {
    res.render('post', {
        templateName: 'post'
    })
    // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'zoro.jpeg'))
    // res.send('<div><h1>Post Title</h1></div>')
}

module.exports = {
    getPost
}