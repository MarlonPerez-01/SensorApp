const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const { LuzRoutes } = require('../routes/luz.routes');
const { TemperaturaRoutes } = require('../routes/temperatura.routes');
const { HumedadRoutes } = require('../routes/humedad.routes');

class Server {
  constructor() {
    this.port = parseInt(process.env.PORT) || 8080;
    this.app = express();

    this.middlewares();
    this.routes();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port: ${this.port}`);
    });
  }

  middlewares() {
    this.app.use(
      cors({ origin: ['http://localhost:3000', 'http://localhost:5000'] })
    );
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan('dev'));
  }

  routes() {
    LuzRoutes(this.app);
    TemperaturaRoutes(this.app);
    HumedadRoutes(this.app);
  }
}

module.exports = {
  Server
};
