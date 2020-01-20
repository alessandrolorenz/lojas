const express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    routes=require('./routes')

  const app = express()
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(routes)

  const url = 'mongodb://localhost:27017/desafio1'
  const connect = mongoose.connect(url,{
     useUnifiedTopology: true ,
     useNewUrlParser: true
  })

  const port = 8081
  app.listen(port)

  console.log('O servidor está rodando na porta: ' + port)