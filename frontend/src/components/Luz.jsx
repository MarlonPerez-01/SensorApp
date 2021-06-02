import React, { useEffect, useState } from 'react';
import { obtener } from '../helpers/fetchLuz';
import LinealLuz from './graficos/LinealLuz';

const Luz = () => {
  const [sanSalvador, setSanSalvador] = useState([]);
  const [usulutan, setUsulutan] = useState([]);
  const [morazan, setMorazan] = useState([]);
  const [laLibertad, setLaLibertad] = useState([]);
  const [laPaz, setLaPaz] = useState([]);

  const obtenerDatos = async () => {
    try {
      const datos = await obtener();
      const { SanSalvador, Usulutan, Morazan, LaLibertad, LaPaz } = datos.data;

      setSanSalvador(SanSalvador);
      setUsulutan(Usulutan);
      setMorazan(Morazan);
      setLaLibertad(LaLibertad);
      setLaPaz(LaPaz);

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
          <LinealLuz datos={sanSalvador} titulo="San Salvador" />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col">
          <LinealLuz datos={usulutan} titulo="Usulután" />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col">
          <LinealLuz datos={morazan} titulo="Morazán" />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col">
          <LinealLuz datos={laLibertad} titulo="La Libertad" />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col">
          <LinealLuz datos={laPaz} titulo="La Paz" />
        </div>
      </div>
    </>
  );
};

export default Luz;
