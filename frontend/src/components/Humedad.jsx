import React, { useEffect, useState } from 'react';
import LinealHumedad from './graficos/LinealHumedad';
import { obtener } from '../helpers/fetchHumedad';

const Humedad = () => {
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
          <LinealHumedad datos={ahuchapan} titulo="Ahuchapán" />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col">
          <LinealHumedad datos={chalatenango} titulo="Chalatenango" />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col">
          <LinealHumedad datos={santaAna} titulo="Santa Ana" />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col">
          <LinealHumedad datos={sonsonate} titulo="Sonsonate" />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col">
          <LinealHumedad datos={sanMiguel} titulo="San Miguel" />
        </div>
      </div>
    </>
  );
};

export default Humedad;
