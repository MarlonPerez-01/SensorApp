## Scripts

En la raíz de la carpeta backend se puede ejecutar en una terminal:

##### `npm install`

Instalar las dependencias:

##### `npm start`

Inicia el servidor en [http://localhost:8000](http://localhost:8000)

## Base de datos

En la carpeta scripts se encuentra el script para la creación de la base de datos en MySQL, también hay dos ficheros que generan datos de prueba que se puede ejecutar con:

##### `node 'archivo.js'`

## Endpoints

- **GET** htpp://localhost:8080/temperatura
  Obtiene los datos de la temperatura de la última hora

---

- **GET** htpp://localhost:8080/humedad
  Obtiene los datos de la humedad de la última hora

---

- **GET** htpp://localhost:8080/luz
  Obtiene los datos de la luz de la última hora
