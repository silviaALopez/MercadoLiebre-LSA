// 1 Paso = Crear repositorio en git hub (para facilitar la subida de los cambios relizados)
// 2 Paso = Clonar el repositorio en visual, para poder trabajar.
//3 Paso = Empezar a trabajar en visua 
//Ejecutar los siguientes commandos 
//1- npm init
//2- npm install express
//3- Cambiar Node app.js a npm start.

//-------Requerir los paquetes---------
const express = require('express');
const app = express();
const path = require('path');

//------Declarar los recursos estaticos (donde se encuentra  public)-----
app.use(express.static(path.join(__dirname, "public"))); 

//Poner a listen el servidor 

app.listen(3001, () => {
    console.log('Listen 3001 ');})
//-------Rutas-------

app.get('/', (req,res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"))
})
app.get('/IniciarSeccion', (req,res) => {
  res.sendFile(path.resolve(__dirname, "./views/IniciarSeccion.html"))
})
app.get('/Registrarse', (req,res) => {
  res.sendFile(path.resolve(__dirname, "./views/Registrarse.html"))
})


