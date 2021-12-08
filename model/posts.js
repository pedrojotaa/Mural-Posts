const connection = require('../database/connection')

module.exports = {

    add(posts, res){
        const sql = 'insert into post set ?'

        connection.query(sql, posts, (erro, resultado) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    },

    get(res){
        const sql = 'select * from post'

        connection.query(sql, (erro, resultado) => {

            /* const valor = resultado[0]  */

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