const PORT = 3000
const customExpress = require('./config/customExpress')
const connection = require('./database/connection')
const Tables = require('./database/tables')

connection.connect(erro => {
    if(erro){
        console.log(erro)
    }else{
        console.log('Conectado com sucesso!')

        Tables.init(connection)

        const app = customExpress()

        app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`))
    }
})