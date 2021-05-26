const { seleccionar } = require('../controllers/luz.controller');
const { intervaloSchema } = require('../validators/query.validator');
const { validarQuery } = require('../middlewares/validaciones');

const LuzRoutes = (app) => {
  app.get('/luz', validarQuery(intervaloSchema), seleccionar);
};

module.exports = { LuzRoutes };
