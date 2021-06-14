/**Importando las librerias */
const functions = require("firebase-functions");
const express = require('express');
const bodyParser = require ('body-parser');
const path = require('path');

//Variables globales


const server = express();
server.use(bodyParser.urlencoded({
  extended:true
}));
server.use(bodyParser.json()); //Para analizar JSON

//Para que el server nos permita cargar IvgVy6LPvoMPgjMdQ185nN6psJyBJ4yOpzqm695
server.use("/imagenes",express.static(path.join(__dirname+'/imagenes')));

//Si alguien intentan acceder desde un navegador
server.get("/",(req, res) => {
  return res.json("Hola soy un bot, pero esta no es la forma adecuada de interactuar conmigo.")
})

//Acceso correcto
server.post("/upeu",(req,res)=>{
    let resultado = `petición recibida post correcta!!`;
    res.json(resultado);
});

const local = true; //Para ejecutar el servidor en local
if(local) {
  server.listen((process.env.PORT || 8000),()=>{
    console.log('Servidor iniciado');
  });
}else{
  //Para firebase
  exports.bot_prueba=functions.https.onRequest(server);
}