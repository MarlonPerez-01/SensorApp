import React from 'react';
import { Line } from 'react-chartjs-2';

const LinealLuz = ({ datos }) => {
  const etiquetas = datos.map((opcion) => {
    const { id } = opcion;
    return id;
  });

  const valores = datos.map((opcion) => {
    const { luz } = opcion;
    return luz;
  });

  return (
    <>
      <Line
        data={{
          labels: etiquetas,
          datasets: [
            {
              label: 'Luz',
              data: valores,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }
          ]
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          },
          legend: {
            labels: {
              fontSize: 25
            }
          }
        }}
      />
    </>
  );
};

export default LinealLuz;
