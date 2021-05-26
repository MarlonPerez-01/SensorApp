const { pool, promisePool } = require('../config/db');

const Seleccionar = async (desde, limite) => {
  try {
    const queryAhuachapan = `SELECT * FROM Ahuachapan ORDER BY id DESC LIMIT ${limite}`;
    const dataAhuchapan = await promisePool.query(queryAhuachapan);

    const queryChalatenango = `SELECT * FROM Chalatenango ORDER BY id DESC LIMIT ${limite}`;
    const dataChalatenango = await promisePool.query(queryChalatenango);

    const querySantaAna = `SELECT * FROM SantaAna ORDER BY id DESC LIMIT ${limite}`;
    const dataSantaAna = await promisePool.query(querySantaAna);

    const querySonsonate = `SELECT * FROM Sonsonate ORDER BY id DESC LIMIT ${limite}`;
    const dataSonsonate = await promisePool.query(querySonsonate);

    const querySanMiguel = `SELECT * FROM SanMiguel ORDER BY id DESC LIMIT ${limite}`;
    const dataSanMiguel = await promisePool.query(querySanMiguel);

    return (data = {
      Ahuchapan: dataAhuchapan[0],
      Chalatenango: dataChalatenango[0],
      SantaAna: dataSantaAna[0],
      Sonsonate: dataSonsonate[0],
      SanMiguel: dataSanMiguel[0]
    });
  } catch (err) {
    throw err;
  }
};

module.exports = {
  Seleccionar
};
