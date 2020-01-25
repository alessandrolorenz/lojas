'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('../swagger.json');
const app = express();


module.exports = class Middleware {

  constructor(){
    app.use('/lojas/api-lojas-docs',
      swaggerUi.serve,
      swaggerUi.setup(swaggerDoc));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(routes);

  }

  applyServer() {
    const port = 8081;
    app.listen(port);
    console.log('O servidor está rodando na porta: ' + port);
  }

};
