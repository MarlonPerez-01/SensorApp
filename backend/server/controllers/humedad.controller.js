const { Seleccionar } = require('../models/Humedad');
const { obtenerPromediosHum } = require('../helpers/Promedios');

const seleccionar = async (req, res) => {
  let { desde, limite } = res.locals.queryValidado;
  desde = desde - 1 || 0;
  limite = limite || 720;

  try {
    const data = await Seleccionar(desde, limite);

    //promedios ordenados de mas antiguo hasta mas reciente (tiempo)
    const Ahuchapan = obtenerPromediosHum(data.Ahuchapan);
    const Chalatenango = obtenerPromediosHum(data.Chalatenango);
    const SantaAna = obtenerPromediosHum(data.SantaAna);
    const Sonsonate = obtenerPromediosHum(data.Sonsonate);
    const SanMiguel = obtenerPromediosHum(data.SanMiguel);

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
