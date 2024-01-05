const express = require('express')
const bodyParser = require('body-parser')
const config = require('config')

module.exports = () => {
    const app = express()

//SETANDO AS VARIÁVEIS DA APLICAÇÃO
app.set('port', process.env.PORT || config.get('server.port'))

//MIDDLEWARES
app.use(bodyParser.json())

return app
}