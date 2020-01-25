'use strict';
const mongoose = require('mongoose');
const NewServer = require('./server');


class Server {
  constructor() {
    this.launcher = new NewServer();
  }

  getServer(){
    this.launcher.applyServer();
    const url = 'mongodb://localhost:27017/desafio1';
    mongoose.set('useFindAndModify', false);
    mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  }
}

new Server().getServer();


