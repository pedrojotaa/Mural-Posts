class Tabela {

    init(connection){
        this.connection = connection

        this.createTable()
    }

    createTable(){
        const sql = `create table if not exists teste (
            id int primary key not null auto_increment,
            title varchar(20) not null,
            description varchar(50) not null
        )`

        this.connection.query(sql, erro => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela criada com sucesso!')
            }
        })
    }
}

module.exports = new Tabela