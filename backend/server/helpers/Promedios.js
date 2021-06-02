const obtenerPromediosLuz = (datosDepartamento) => {
  let datos = [...datosDepartamento];
  let promedios = [];

  do {
    let suma = 0;
    for (let i = 1; i <= 12; i++) {
      suma += parseFloat(datos[datos.length - 1].luz);
      datos.pop();
    }
    suma = suma / 12;
    promedios.push(parseFloat(suma.toFixed(2)));
  } while (datos.length > 0);

  return promedios;
};

const obtenerPromediosTemp = (datosDepartamento) => {
  let datos = [...datosDepartamento];
  let promedios = [];

  do {
    let suma = 0;
    for (let i = 1; i <= 12; i++) {
      suma += parseFloat(datos[datos.length - 1].temperatura);
      datos.pop();
    }
    suma = suma / 12;
    promedios.push(parseFloat(suma.toFixed(2)));
  } while (datos.length > 0);

  return promedios;
};

const obtenerPromediosHum = (datosDepartamento) => {
  let datos = [...datosDepartamento];
  let promedios = [];

  do {
    let suma = 0;
    for (let i = 1; i <= 12; i++) {
      suma += parseFloat(datos[datos.length - 1].humedad);
      datos.pop();
    }
    suma = suma / 12;
    promedios.push(parseFloat(suma.toFixed(2)));
  } while (datos.length > 0);

  return promedios;
};

module.exports = {
  obtenerPromediosLuz,
  obtenerPromediosTemp,
  obtenerPromediosHum
};
