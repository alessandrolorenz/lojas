'use strict';
const { Router } = require('express');
const lojaController = require('./controllers/lojaController');
const searchController = require('./controllers/searchController');

const routes = Router();

routes.get('/lojas', lojaController.index);
routes.post('/lojas', lojaController.store);
routes.delete('/lojas/destroy/:id/:name', lojaController.destroy);
routes.put('/lojas/update', lojaController.update);

routes.get('/lojas/search01', searchController.searchByStateCity);

module.exports = routes;
