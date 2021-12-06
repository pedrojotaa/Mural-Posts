class Tabela {

    createTable(){
        const sql = `create table mural if not exists posts(
            id int primary key not null auto_increment,
            title varchar(20) not null,
            description varchar(50) not null
        )`

    }
}