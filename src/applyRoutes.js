'use strict';
const lojaController = require('./controllers/lojaController');
const searchController = require('./controllers/searchController');

module.exports = class Routes {

  static applyRoutes(routes) {
    routes.get('/lojas', lojaController.index);
    routes.post('/lojas', lojaController.store);
    routes.delete('/lojas/destroy/:id', lojaController.destroy);
    routes.put('/lojas/update', lojaController.update);
    routes.get('/lojas/search01', searchController.searchByStateCity);
  }
};
