'use strict';
const mongoose = require('mongoose');

const Loja = new mongoose.Schema({
  name: String,
  address: String,
  phone: Number,
  cnpj: String,
  workingHours: String,
  city: String,
  state: String,

});

module.exports = mongoose.model('Loja', Loja);
