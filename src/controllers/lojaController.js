'use strict';
const Loja = require('../models/Loja');

module.exports = {

  async index(req, res) {
    const lojas = await Loja.find();
    res.json(lojas);
  },

  async store(req, res) {
    let { name, address, phone, cnpj, workingHours, city, state } = req.body;
    state = state.toUpperCase();
    const nomeLoja = await Loja.find({ name: name });
    if (nomeLoja.length > 0) {
      console.log('loja já existente');
      res.json('loja já existente');
    } else {
      const loja = await Loja.create({
        name,
        address,
        phone,
        cnpj,
        workingHours,
        city,
        state,
      });

      res.json(loja);
    }
  },
  async destroy(req, res) {
    const { id } = req.params;
    const loja = await Loja.findOneAndDelete({
      _id: id,
    });
    res.json(loja);
  },
  async update(req, res) {
    const {
      _id,
      name,
      address,
      phone,
      workingHours,
      cnpj,
      city,
      state,
    } = req.body;
    console.log(_id, name, address, phone, cnpj, city, state);
    const loja = await Loja.findOneAndUpdate(
      {
        _id,
      },
      {
        name,
        address,
        phone,
        cnpj,
        workingHours,
        city,
        state,
      },
      {
        new: true,
      });

    res.json(loja);
  },

};
