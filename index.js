const express = require("express");
const db = require("./config");
const mongoose = require("mongoose");

class App {
    constructor() {
      this.express = express();
  
      this.database();
      this.middlewares();
      this.routes();
  
      this.express.listen(3000, () =>
        console.log(`API REST con mongo DB ejecutando en el puerto 3000 `)
      );
    }
  
    async database() {
      await mongoose.connect(db.uri, { useNewUrlParser: true });
    }
  
    middlewares() {
      this.express.use(express.json());
    }
  
    routes() {
      this.express.use(require("./routes/routes"));
    }
  }
  module.exports = new App().express;