'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);

const url = 'mongodb://localhost:27017/desafio1';
mongoose.connect(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const port = 8081;
app.listen(port);

console.log('O servidor está rodando na porta: ' + port);
