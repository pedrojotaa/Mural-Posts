const express = require('express')
const bodyParser = require('body-parser')
const cosign = require('consign')
const path = require('path')

module.exports = () => {
    const app = express()

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))
    app.use('/', express.static(path.join(__dirname, 'public')))

    cosign()
        .include('routes')
            .into(app)

    return app
}