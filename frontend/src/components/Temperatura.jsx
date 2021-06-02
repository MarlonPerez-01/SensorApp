import React, { useEffect, useState } from 'react';
import LinealTemperatura from './graficos/LinealTemperatura';
import { obtener } from '../helpers/fetchTemperatura';

const Temperatura = () => {
  const [ahuchapan, setAhuchapan] = useState([]);
  const [chalatenango, setChalatenango] = useState([]);
  const [santaAna, setSantaAna] = useState([]);
  const [sonsonate, setSonsonate] = useState([]);
  const [sanMiguel, setSanMiguel] = useState([]);

  const obtenerDatos = async () => {
    try {
      const datos = await obtener();
      const { Ahuchapan, Chalatenango, SantaAna, Sonsonate, SanMiguel } =
        datos.data;

      setAhuchapan(Ahuchapan);
      setChalatenango(Chalatenango);
      setSantaAna(SantaAna);
      setSonsonate(Sonsonate);
      setSanMiguel(SanMiguel);

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
      <div className="row mt-4 mb-5">
        <div className="col">
          <LinealTemperatura datos={ahuchapan} titulo="Ahuchapán" />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col">
          <LinealTemperatura datos={chalatenango} titulo="Chalatenango" />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col">
          <LinealTemperatura datos={santaAna} titulo="Santa Ana" />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col">
          <LinealTemperatura datos={sonsonate} titulo="Sonsonate" />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col">
          <LinealTemperatura datos={sanMiguel} titulo="San Miguel" />
        </div>
      </div>
    </>
  );
};

export default Temperatura;
