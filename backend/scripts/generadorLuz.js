const fs = require('fs');

let datos = '';

const departamentos = [
  'SanSalvador',
  'Usulutan',
  'Morazan',
  'LaLibertad',
  'LaPaz'
];

const recorrerDepartamento = (tabla) => {
  for (i = 1; i <= 720; i++) {
    datos += `INSERT INTO ${tabla} (luz) VALUES (${(
      Math.random() * (200 - 800) +
      800
    ).toFixed(2)});\n`;
  }
};

departamentos.forEach((tabla) => {
  recorrerDepartamento(tabla);
});

fs.writeFileSync('datos_luz.sql', datos);
