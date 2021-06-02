const { Seleccionar } = require('../models/Luz');

const seleccionar = async (req, res) => {
  const obtenerPromedio = (datosDepartamento) => {
    let datos = [...datosDepartamento];
    let promedios = [];

    do {
      let suma = 0;
      for (let i = 1; i <= 12; i++) {
        suma += parseFloat(datos[datos.length - 1].luz);
        console.log('acum', suma);
        datos.pop();
      }
      suma = suma / 12;
      console.log('promedio', suma);
      promedios.push(suma.toFixed(2));
    } while (datos.length > 0);
    console.log(datos);

    return promedios;
  };

  let { desde, limite } = res.locals.queryValidado;

  desde = desde - 1 || 0;
  limite = limite || 720;

  try {
    const data = await Seleccionar(desde, limite);

    let promedios = [];
    promedios = obtenerPromedio(data.SanSalvador);

    if (data) {
      return res.json({
        msg: 'Registros obtenidos',
        long: promedios.length,
        promedios,
        data,
      });
    }

    res.status(404).json({
      msg: 'No se encontraron registros',
      data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Comuniquese con el administrador' });
  }
};

module.exports = {
  seleccionar,
};
