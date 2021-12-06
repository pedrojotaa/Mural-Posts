const connection = require('../database/connection')

module.exports = {

    getAll(){
        return this.posts
    },

    add(title, description, res){
        const sql = 'insert into mural set ?'

        connection.query(sql, )

    }
  
}

function generateID(){
    return Math.random().toString(36).substr(2, 9)
}