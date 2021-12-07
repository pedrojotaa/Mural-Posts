const connection = require('../database/connection')

module.exports = {

    add(title, description, res){
        const sql = 'insert into mural set ?'

        connection.query(sql, [title, description], (erro, resultado) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    },

    get(res){
        const sql = 'select * from mural'

        connection.query(sql, (erro, resultado) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })

    }
}

/* function generateID(){
    return Math.random().toString(36).substr(2, 9)
} */