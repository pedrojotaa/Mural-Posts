const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORTA = 3000

app.listen(PORTA, () => console.log(`Server rodando na porta ${PORTA}`))

let mural = [
    {
        id: 'fsdfsdf',
        title: 'test title',
        description: 'test description'
    }
]

app.get('/all', (req, res) => {
    res.json(JSON.stringify(mural))
})

app.post('/new',bodyParser.json(), (req, res) => {
    let id = generateID()
    let title = req.body.title
    let description = req.body.description
    
    mural.push({id, title, description})

    res.send('Post Adicionado')
})

function generateID(){
    return Math.random().toString(36).substr(2, 9)
}

