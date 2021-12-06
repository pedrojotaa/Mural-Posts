const bodyParser = require('body-parser')
const cors = require('cors')

const posts = require('../model/posts')

/* let options = {
    origin: 'http://localhost:3000'
}
 */
router.use(cors())

module.exports = app => {
    
    app.get('/all', (req, res) => {
        res.json(JSON.stringify(posts.getAll()))
    })
    
    app.post('/new', (req, res) => {
      
        let title = req.body.title
        let description = req.body.description
        
        posts.add(title, description, res)
    
        res.send('Post Adicionado')
    })
    
   
}
