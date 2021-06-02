const fs = require('fs');

let datos = '';

const departamentos = [
  'SanSalvador',
  'Usulutan',
  'Morazan',
  'LaLibertad',
  'LaPaz'
];

//Los datos enviados por el sensor de luz se encuentran en un intervalo de 0 a 100
const recorrerDepartamento = (tabla) => {
  for (i = 1; i <= 720; i++) {
    datos += `INSERT INTO ${tabla} (luz) VALUES (${(
      Math.random() * (0 - 100) +
      100
    ).toFixed(2)});\n`;
  }
};

departamentos.forEach((tabla) => {
  recorrerDepartamento(tabla);
});

fs.writeFileSync('datos_luz.sql', datos);
