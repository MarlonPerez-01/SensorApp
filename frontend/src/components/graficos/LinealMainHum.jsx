import React from 'react';
import { Line } from 'react-chartjs-2';
import horas from '../../helpers/obtenerHora';

const LinealMainHum = ({ datos }) => {
  return (
    <>
      <Line
        data={{
          labels: horas,
          datasets: [
            {
              label: 'Ahuchapan',
              data: datos.Ahuchapan,
              backgroundColor: ['rgba(255, 99, 132, 0.2)'],
              borderColor: ['rgba(255, 99, 132, 1)'],
              borderWidth: 1.1,
            },
            {
              label: 'Chalatenango',
              data: datos.Chalatenango,
              backgroundColor: ['rgba(75, 192, 192, 0.2)'],
              borderColor: ['rgba(54, 162, 235, 1)'],
              borderWidth: 1.1,
            },
            {
              label: 'SanMiguel',
              data: datos.SanMiguel,
              backgroundColor: 'rgba(255, 206, 86, 0.2)',
              borderColor: ['rgba(255, 206, 86, 1)'],
              borderWidth: 1.1,
            },
            {
              label: 'Santa Ana',
              data: datos.SantaAna,
              backgroundColor: ['rgba(153, 102, 255, 0.2)'],
              borderColor: ['rgba(153, 102, 255, 1)'],
              borderWidth: 1.1,
            },
            {
              label: 'Sonsonate',
              data: datos.Sonsonate,
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

export default LinealMainHum;
