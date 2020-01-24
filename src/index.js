'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('../swagger.json');

const app = express();
app.use('/lojas/api-lojas-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

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
