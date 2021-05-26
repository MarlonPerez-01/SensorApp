const { seleccionar } = require('../controllers/temperatura.controller');
const { intervaloSchema } = require('../validators/query.validator');
const { validarQuery } = require('../middlewares/validaciones');

const TemperaturaRoutes = (app) => {
  app.get('/temperatura', validarQuery(intervaloSchema), seleccionar);
};

module.exports = { TemperaturaRoutes };
