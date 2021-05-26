import React, { useEffect, useState } from 'react';
import LinealLuz from './graficos/LinealLuz';
import { obtener } from '../helpers/fetchLuz';

const Luz = () => {
  const [sanSalvador, setSanSalvador] = useState([]);
  const [usulutan, setUsulutan] = useState([]);
  const [morazan, setMorazan] = useState([]);
  const [laLibertad, setLaLibertad] = useState([]);
  const [laPaz, setLaPaz] = useState([]);

  const obtenerDatos = async () => {
    try {
      const datos = await obtener();

      if (Object.keys(datos.data).length === 5) {
        const sanSalvadorArr = datos.data.SanSalvador.sort(function (a, b) {
          return a - b;
        });
        const usulutanArr = datos.data.Usulutan.sort(function (a, b) {
          return a - b;
        });
        const morazanArr = datos.data.Morazan.sort(function (a, b) {
          return a - b;
        });
        const laLibertadArr = datos.data.LaLibertad.sort(function (a, b) {
          return a - b;
        });
        const laPazArr = datos.data.LaPaz.sort(function (a, b) {
          return a - b;
        });

        setSanSalvador(sanSalvadorArr);
        setUsulutan(usulutanArr);
        setMorazan(morazanArr);
        setLaLibertad(laLibertadArr);
        setLaPaz(laPazArr);
      } else {
        //TODO: hacer algo si no se reciben los datos
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  return (
    <>
      <div className="row mb-5">
        <div className="col">
          <LinealLuz datos={sanSalvador} />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col">
          <LinealLuz datos={usulutan} />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col">
          <LinealLuz datos={morazan} />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col">
          <LinealLuz datos={laLibertad} />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col">
          <LinealLuz datos={laPaz} />
        </div>
      </div>
    </>
  );
};

export default Luz;
