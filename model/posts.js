const connection = require('../database/connection')

module.exports = {

    add(posts, res){
        const sql = 'insert into post set ?'

        connection.query(sql, posts, (erro, resultado) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json({posts})
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
    },

    deleteAll(res){

        const sql = 'truncate table post'

        connection.query(sql, (erro, resultado) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    },

    deleteById(id, res){

        const sql = 'delete from post where id=?'

        connection.query(sql, id, (erro, resultado) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json({id})
            }
        })
    }
}

/* function generateID(){
    return Math.random().toString(36).substr(2, 9)
} */