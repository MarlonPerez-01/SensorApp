const { pool, promisePool } = require('../config/db');

const Seleccionar = async (desde, limite) => {
  try {
    const querySanSalvador = `SELECT * FROM SanSalvador ORDER BY id DESC LIMIT ${limite}`;
    const dataSanSalvador = await promisePool.query(querySanSalvador);

    const queryUsulutan = `SELECT * FROM Usulutan ORDER BY id DESC LIMIT ${limite}`;
    const dataUsulutan = await promisePool.query(queryUsulutan);

    const queryMorazan = `SELECT * FROM Morazan ORDER BY id DESC LIMIT ${limite}`;
    const dataMorazan = await promisePool.query(queryMorazan);

    const queryLaLibertad = `SELECT * FROM LaLibertad ORDER BY id DESC LIMIT ${limite}`;
    const dataLaLibertad = await promisePool.query(queryLaLibertad);

    const queryLaPaz = `SELECT * FROM LaPaz ORDER BY id DESC LIMIT ${limite}`;
    const dataLaPaz = await promisePool.query(queryLaPaz);

    return (data = {
      SanSalvador: dataSanSalvador[0],
      Usulutan: dataUsulutan[0],
      Morazan: dataMorazan[0],
      LaLibertad: dataLaLibertad[0],
      LaPaz: dataLaPaz[0]
    });
  } catch (err) {
    throw err;
  }
};

module.exports = {
  Seleccionar
};
