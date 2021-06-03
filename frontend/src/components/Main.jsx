import React, { useEffect, useState } from 'react';
import { obtener as obtenerTemp } from '../helpers/fetchTemperatura';
import { obtener as obtenerHum } from '../helpers/fetchHumedad';
import { obtener as obtenerLuz } from '../helpers/fetchLuz';
import LinealMainTemp from './graficos/LinealMainTemp';
import LinealMainHum from './graficos/LinealMainHum';
import LinealMainLuz from './graficos/LinealMainLuz';

const Main = () => {
  const [promediosTemp, setPromediosTemp] = useState({});
  const [promediosHum, setPromediosHum] = useState({});
  const [promediosLuz, setpromediosLuz] = useState({});

  const obtenerDatos = async () => {
    try {
      const datosTemp = await obtenerTemp();
      const datosHum = await obtenerHum();
      const datosLuz = await obtenerLuz();

      setPromediosTemp(datosTemp.data);
      setPromediosHum(datosHum.data);
      setpromediosLuz(datosLuz.data);

      //TODO: hacer algo si no se reciben los datos
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  return (
    <>
      <div className="row mt-5">
        <div className="col">
          <h4>Humedad en todos los departamentos</h4>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <LinealMainTemp datos={promediosTemp} />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <h4>Temperatura en todos los departamentos</h4>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <LinealMainHum datos={promediosHum} />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <h4>Luz en todos los departamentos</h4>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col">
          <LinealMainLuz datos={promediosLuz} />
        </div>
      </div>
    </>
  );
};

export default Main;
