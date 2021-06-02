const { Seleccionar } = require('../models/Temperatura');
const { obtenerPromediosTemp } = require('../helpers/Promedios');

const seleccionar = async (req, res) => {
  let { desde, limite } = res.locals.queryValidado;
  desde = desde - 1 || 0;
  limite = limite || 720;

  try {
    const data = await Seleccionar(desde, limite);

    //promedios ordenados de mas antiguo hasta mas reciente (tiempo)
    const Ahuchapan = obtenerPromediosTemp(data.Ahuchapan);
    const Chalatenango = obtenerPromediosTemp(data.Chalatenango);
    const SantaAna = obtenerPromediosTemp(data.SantaAna);
    const Sonsonate = obtenerPromediosTemp(data.Sonsonate);
    const SanMiguel = obtenerPromediosTemp(data.SanMiguel);

    if (data) {
      return res.json({
        msg: 'Registros obtenidos',
        data: {
          Ahuchapan,
          Chalatenango,
          SantaAna,
          Sonsonate,
          SanMiguel
        }
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
