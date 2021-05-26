const { Server } = require('./models/Server');
require('./config/db');

new Server().listen();
