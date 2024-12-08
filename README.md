# 🎬 **Netflis API** 🍿

API RESTful para gestionar una base de datos de películas. Esta API proporciona rutas para obtener, crear y buscar películas, todo en un backend desarrollado con **Node.js** y **Express**. 

### 🔗 **[Ver el proyecto en vivo aquí](https://nelsonvalentingarrodadan.github.io/Netflis/index.html)**

---

## 🚀 **Características principales**
- **GET /movies**: Obtiene todas las películas almacenadas en la base de datos.
- **POST /movies**: Crea una nueva película en la base de datos.
- **GET /movies/:title**: Obtiene una película específica por título.

---

## ⚙️ **Tecnologías usadas**
<p align="center">
  <img src="https://img.shields.io/badge/Node.js-8CC84B?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Mongoose-8800C4?style=for-the-badge&logo=mongoose&logoColor=white" alt="Mongoose" />
</p>

---

## 🛠️ **Rutas disponibles**

### **GET /movies**
Obtiene todas las películas registradas en la base de datos.

**Respuesta exitosa**:
```bash
[
  {
    "title": "Movie Title",
    "year": "2022",
    "director": "Director Name",
    "duration": "120 min",
    "genre": ["Action", "Drama"],
    "rate": 8.5,
    "poster": "image_url.jpg"
  },
  ...
]
```
## **POST /movies**
Crea una nueva película en la base de datos. Se requiere un cuerpo de solicitud con la siguiente estructura:

Cuerpo de la solicitud:


```json
{
  "title": "Movie Title",
  "year": "2022",
  "director": "Director Name",
  "duration": "120 min",
  "genre": ["Action", "Drama"],
  "rate": 8.5,
  "poster": "image_url.jpg"
}
```
Respuesta exitosa:

```json
{
  "title": "Movie Title",
  "year": "2022",
  "director": "Director Name",
  "duration": "120 min",
  "genre": ["Action", "Drama"],
  "rate": 8.5,
  "poster": "image_url.jpg"
}
```
## **GET /movies/:title**
Obtiene una película por su título. Si la película no se encuentra, devuelve un mensaje de error.

Respuesta exitosa:

```json
{
  "title": "Movie Title",
  "year": "2022",
  "director": "Director Name",
  "duration": "120 min",
  "genre": ["Action", "Drama"],
  "rate": 8.5,
  "poster": "image_url.jpg"
}
```
Respuesta en caso de error:

```json
{
  "message": "Película no encontrada"
}
```
## 🧑‍💻 **Instalación y uso**
1. Clona el repositorio:
```bash
git clone https://github.com/NelsonValentinGarroDadan/NetflisAPI.git
```
2. Instala las dependencias:
```bash
npm install
```
3. Inicia el servidor:
```bash
npm start
```
## 🎯 **Próximos pasos**
- ✅ Mejorar validación de datos en las rutas.
- 🔧 Implementar nuevas rutas para actualizar y eliminar películas.
- 🛠️ Añadir pruebas unitarias para mejorar la robustez de la API.
## 🖇️ **Enlaces importantes**
- 🌐 [Deploy](https://netflisapi.onrender.com/movies)
- 🔗 [Frontend Repositorio](https://github.com/NelsonValentinGarroDadan/Netflis)
<p align="center"> ¡Espero que disfrutes explorando **Netflis** tanto como yo disfruté construyéndolo! 🐧 </p>
