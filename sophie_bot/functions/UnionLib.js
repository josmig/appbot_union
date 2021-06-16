/**
 * Crea una respuesta basica a partir de un texto
 * @param {*} textoEnviar 
 * @returns la cadena JSON de respuesta
 */

function respuestBasica(textoEnviar){
    let respuesta = { 
    "fulfillmentText": textoEnviar,
    "fulfillmentMessages": [
      {
        "platform": "ACTIONS_ON_GOOGLE",
        "simpleResponses": {
          "simpleResponses": [
            {
              "textToSpeech": textoEnviar
            }
          ]
        }
      },
      {
        "platform": "ACTIONS_ON_GOOGLE",
        "simpleResponses": {
          "simpleResponses": [
            {
              "textToSpeech": "Para poder comenzar , te sugiero elegir el campus de tu interés, para eso puedes elegir la opción sedes que se encuentra en la parte inferior."
            }
          ]
        }
      },
      {
        "platform": "ACTIONS_ON_GOOGLE",
        "suggestions": {
          "suggestions": [
            {
              "title": "Nosotros"
            },
            {
              "title": "Admisión"
            },
            {
              "title": "Sedes"
            },
            {
              "title": "Contactos"
            },
            {
              "title": "Académico"
            },
            {
              "title": "Ayuda"
            }
          ]
        }
      },
      {
        "text": {
          "text": [
            textoEnviar
          ]
        }
      }
    ]};
    return respuesta;
}


function hola(nombre){
    console.log(`Encantado de conocerte ${nombre}`);
}
  
module.exports ={  
  respuestBasica:respuestBasica  
}