/* let options = {
    origin: 'http://localhost:3000'
}

router.use(cors()) */

const Posts = require('../model/posts')

module.exports = app => {
    app.get('/all', (req, res) => {
        Posts.get(res)
    })
        
    app.post('/new', (req, res) => {
        const posts = req.body

        Posts.add(posts, res)
    })
}