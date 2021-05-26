import React, { useEffect, useState } from 'react';

import { obtener } from '../helpers/fetchTemperatura';
import LinealTemperatura from './graficos/LinealTemperatura';

const Temperatura = () => {
  const [Ahuchapan, setAhuchapan] = useState([]);
  const [Chalatenango, setChalatenango] = useState([]);
  const [SantaAna, setSantaAna] = useState([]);
  const [Sonsonate, setSonsonate] = useState([]);
  const [SanMiguel, setSanMiguel] = useState([]);

  const obtenerDatos = async () => {
    try {
      const datos = await obtener();

      if (Object.keys(datos.data).length === 5) {
        const AhuchapanArr = datos.data.Ahuchapan.sort(function (a, b) {
          return a - b;
        });
        const ChalatenangoArr = datos.data.Chalatenango.sort(function (a, b) {
          return a - b;
        });
        const SantaAnaArr = datos.data.SantaAna.sort(function (a, b) {
          return a - b;
        });
        const SonsonateArr = datos.data.Sonsonate.sort(function (a, b) {
          return a - b;
        });
        const SanMiguelArr = datos.data.SanMiguel.sort(function (a, b) {
          return a - b;
        });

        setAhuchapan(AhuchapanArr);
        setChalatenango(ChalatenangoArr);
        setSantaAna(SantaAnaArr);
        setSonsonate(SonsonateArr);
        setSanMiguel(SanMiguelArr);
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
          <LinealTemperatura datos={Ahuchapan} />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col">
          <LinealTemperatura datos={Chalatenango} />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col">
          <LinealTemperatura datos={SantaAna} />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col">
          <LinealTemperatura datos={Sonsonate} />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col">
          <LinealTemperatura datos={SanMiguel} />
        </div>
      </div>
    </>
  );
};

export default Temperatura;
