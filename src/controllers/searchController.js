'use strict';
const Loja = require('../models/Loja');

module.exports = {

  async searchByStateCity(req, res){
    let {state, city} = req.query;

    if (state && city){
      state = state.toUpperCase();
      const loja = await Loja.find({state, city});
      res.json(loja);
    } else if (state && !city){
      state = state.toUpperCase();
      const loja = await Loja.find({state});
      res.json(loja);
    } else {
      const loja = await Loja.find({city});
      res.json(loja);
    }
  },

};
