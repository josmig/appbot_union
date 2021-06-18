const functions = require("firebase-functions");
const express  = require('express');
const bodyParser = require('body-parser');
const path = require('path');
//Importando la libreria
const lib = require('./UPEUlib');
    
//Iniciando el servidor    
const server = express();

server.use(bodyParser.urlencoded({
  extended:true
}));
server.use(bodyParser.json()); //Para analizar JSON



//Para que el server nos permita cargar IvgVy6LPvoMPgjMdQ185nN6psJyBJ4yOpzqm695
server.use("/imagenes",express.static(path.join(__dirname+'/imagenes')));

//Si alguien intentan acceder desde un navegador y no tiene autorizacion
server.get("/",(req, res) => {
  return res.json("Hola soy un bot, pero esta no es la forma adecuada de interactuar conmigo.")
});

//Acceso correcto
server.post('/upeu', (req,res) => {
  let context = "";
  let result  = `Petición resivida estado de post incorrecto`;
  let opciones = lib.reduceaOcho(["Admisión","Nosotros","Sedes","Contactos","Académico","Servicios","Facultades","Carreras","Test Vocacional","CEPRE Upeu","Ayuda","Salir"]); 
  try{
    context = req.body.queryResult.action;
    result = `Recibida peticion de accione ${context}`;

  }catch(error){
    console.log("ERROR contexto vacio : " + error);    
  }

  //Segunda alternativa para que se spa si existe el action o parametro
  if(req.body.queryResult.parameters){
    console.log("parametros : " + req.body.queryResult.parameters);
  }else{
    console.log('Sin parametros');
  }

  if(context === "input.welcome"){
    /************input.welcome************* */
    textoEnviar = "¡Hola! Me llamo Sophia seré tu asistente virtual. Estoy aquí para brindarte información sobre la UPeU. Para poder comenzar , te sugiero elegir el campus de tu interés, para eso puedes elegir la opción sedes que se encuentra en la parte inferior.";
    /* textoEnviar = "Hola me llamo pantigoso"; */
     result = lib.respuestaBasica(textoEnviar);  
  }else if(context === "menu"){
    result = lib.respuestaBasica('Que bueno que lo preguntes , te sugiero los siguientes temas para que conozcas mas de nosotros.');
  }
  else{
    //Se recibe un actions desconocido (contexto)
    result = lib.respuestaBasica(`Todavia no he aprendido a gestionar : ${context}`);
  }
  lib.addSugerencia(result, opciones);
  res.json(result);
});


//Para ejecutar el servidor en local true = local false = firebase
const local = false; 
if(local) {
  server.listen((process.env.PORT || 8000 ), () => {
    console.log('Servidor iniciado!!');
  })
}else{
  //Para Firebase
  exports.unionBot = functions.https.onRequest(server);
}


