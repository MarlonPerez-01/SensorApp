const { Seleccionar, Insertar } = require('../models/Luz');
const { obtenerPromediosLuz } = require('../helpers/Promedios');

const seleccionar = async (req, res) => {
  let { desde, limite } = res.locals.queryValidado;
  desde = desde - 1 || 0;
  limite = limite || 720;

  try {
    const data = await Seleccionar(desde, limite);

    //promedios ordenados de mas antiguo hasta mas reciente (tiempo)
    const SanSalvador = obtenerPromediosLuz(data.SanSalvador);
    const Usulutan = obtenerPromediosLuz(data.Usulutan);
    const Morazan = obtenerPromediosLuz(data.Morazan);
    const LaLibertad = obtenerPromediosLuz(data.LaLibertad);
    const LaPaz = obtenerPromediosLuz(data.LaPaz);

    if (data) {
      return res.json({
        msg: 'Registros obtenidos',
        data: { SanSalvador, Usulutan, Morazan, LaLibertad, LaPaz }
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

const insertar = async (req, res) => {
  const nuevaLuz = res.locals.bodyValidado;

  try {
    const data = await Insertar(nuevaLuz);
    data[0].affectedRows === 1
      ? res.json({
          msg: 'El registro ha sido insertado',

          data: { id: data[0].insertId, ...nuevaLuz }
        })
      : res.status(400).json({
          ok: false,
          msg: 'El registro no fue insertado'
        });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Comuniquese con el administrador' });
  }
};

module.exports = {
  seleccionar,
  insertar
};
