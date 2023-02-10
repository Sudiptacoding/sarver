var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.send('hello world')
})

app.listen(3000)