const { seleccionar } = require('../controllers/humedad.controller');
const { intervaloSchema } = require('../validators/query.validator');
const { validarQuery } = require('../middlewares/validaciones');

const HumedadRoutes = (app) => {
  app.get('/humedad', validarQuery(intervaloSchema), seleccionar);
};

module.exports = { HumedadRoutes };
