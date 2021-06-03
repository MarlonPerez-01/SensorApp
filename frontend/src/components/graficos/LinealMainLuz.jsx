import React from 'react';
import { Line } from 'react-chartjs-2';
import horas from '../../helpers/obtenerHora';

const LinealMainLuz = ({ datos }) => {
  return (
    <>
      <Line
        data={{
          labels: horas,
          datasets: [
            {
              label: 'San Salvador',
              data: datos.SanSalvador,
              backgroundColor: ['rgba(255, 99, 132, 0.2)'],
              borderColor: ['rgba(255, 99, 132, 1)'],
              borderWidth: 1.1,
            },
            {
              label: 'Usulutan',
              data: datos.Usulutan,
              backgroundColor: ['rgba(75, 192, 192, 0.2)'],
              borderColor: ['rgba(54, 162, 235, 1)'],
              borderWidth: 1.1,
            },
            {
              label: 'Morazan',
              data: datos.Morazan,
              backgroundColor: 'rgba(255, 206, 86, 0.2)',
              borderColor: ['rgba(255, 206, 86, 1)'],
              borderWidth: 1.1,
            },
            {
              label: 'La Libertad',
              data: datos.LaLibertad,
              backgroundColor: ['rgba(153, 102, 255, 0.2)'],
              borderColor: ['rgba(153, 102, 255, 1)'],
              borderWidth: 1.1,
            },
            {
              label: 'La Paz',
              data: datos.LaPaz,
              backgroundColor: ['rgba(255, 159, 64, 0.2)'],
              borderColor: ['rgba(255, 159, 64, 1)'],
              borderWidth: 1.1,
            },
          ],
        }}
        height={500}
        width={600}
        options={{
          elements: {
            line: {
              tension: 0.1,
            },
          },
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
          plugins: {
            title: {
              display: true,
              text: `Humedad de la última hora`,
            },
          },
        }}
      />
    </>
  );
};

export default LinealMainLuz;
