import React from 'react';
import { Line } from 'react-chartjs-2';
import horas from '../../helpers/obtenerHora';

const LinealHumedad = ({ datos, titulo }) => {
  return (
    <>
      <Line
        data={{
          labels: horas,
          datasets: [
            {
              label: 'Humedad',
              data: datos,
              backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],

              borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1.1,
            },
          ],
        }}
        height={410}
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
              text: `Humedad de la última hora en ${titulo}`,
            },
          },
        }}
      />
    </>
  );
};

export default LinealHumedad;
