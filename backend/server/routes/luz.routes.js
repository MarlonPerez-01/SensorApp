const { seleccionar, insertar } = require('../controllers/luz.controller');
const { intervaloSchema } = require('../validators/query.validator');
const { validarQuery, validarBody } = require('../middlewares/validaciones');
const { luzSchema } = require('../validators/luz.validator');

const LuzRoutes = (app) => {
  app.get('/luz', validarQuery(intervaloSchema), seleccionar);
  app.post('/luz', validarBody(luzSchema), insertar);
};

module.exports = { LuzRoutes };
