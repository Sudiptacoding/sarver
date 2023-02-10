var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Aminur Love To MIM 😘')
})

app.listen(3000)