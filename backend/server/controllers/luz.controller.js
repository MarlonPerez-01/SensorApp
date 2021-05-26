const { Seleccionar } = require('../models/Luz');

const seleccionar = async (req, res) => {
  let { desde, limite } = res.locals.queryValidado;

  //Se resta uno porque inicia en la posicion cero, si no manda nada por defecto sera cero.
  desde = desde - 1 || 0;

  //si no manda nada el cliente, por defecto el limite seran diez registros
  limite = limite || 100;

  try {
    const data = await Seleccionar(desde, limite);

    if (data) {
      return res.json({
        msg: 'Registros obtenidos',
        data: data
      });
    }

    res.status(404).json({
      msg: 'No se encontraron registros',
      data
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Comuniquese con el administrador' });
  }
};

module.exports = {
  seleccionar
};
