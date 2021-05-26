const fs = require('fs');

let datos = '';

const departamentos = [
  'Ahuachapan',
  'Chalatenango',
  'SantaAna',
  'Sonsonate',
  'SanMiguel'
];

const recorrerDepartamento = (tabla) => {
  for (i = 1; i <= 720; i++) {
    datos += `INSERT INTO ${tabla} (temperatura, humedad) VALUES (${(
      Math.random() * (12 - 45) +
      40
    ).toFixed(2)},${(Math.random() * (0 - 100) + 100).toFixed(2)});\n`;
  }
};

departamentos.forEach((tabla) => {
  recorrerDepartamento(tabla);
});

fs.writeFileSync('datos_temp_hum.sql', datos);
