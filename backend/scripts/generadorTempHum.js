const fs = require('fs');

let datos = '';

const departamentos = [
  'Ahuachapan',
  'Chalatenango',
  'SantaAna',
  'Sonsonate',
  'SanMiguel',
];

//Los datos enviados por el sensor de temperatura se encuentran en un intervalo de 0 a 50
//Los datos enviados por el sensor de humedad se encuentran en un intervalo de 0 a 100
const recorrerDepartamento = (tabla) => {
  for (i = 1; i <= 720; i++) {
    datos += `INSERT INTO ${tabla} (temperatura, humedad) VALUES (${(
      Math.random() * (0 - 50) +
      50
    ).toFixed(2)},${(Math.random() * (0 - 100) + 100).toFixed(2)});\n`;
  }
};

departamentos.forEach((tabla) => {
  recorrerDepartamento(tabla);
});

fs.writeFileSync('datos_temp_hum.sql', datos);
