'use strict';
const { Router } = require('express');
const Routes = require('./applyRoutes');


const routes = Router();

Routes.applyRoutes(routes);


module.exports = routes;
