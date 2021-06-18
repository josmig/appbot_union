/**
 * Crea un respuesta basica a partir de un texto
 * @param {*} textoEnviar 
 * @returns la cadena JSON de respuesta
 */

function respuestaBasica(textoEnviar) {
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
      /* {
        "platform": "ACTIONS_ON_GOOGLE",
        "simpleResponses": {
          "simpleResponses": [
            {
              "textToSpeech": 
            }
          ]
        }
      }, */
      {
        "text": {
          "text": [
            textoEnviar
          ]
        }
      }
    ]
  }
  return respuesta;
}

/**
  @param {*} res Añade a una respuesta basica la lista de sugerencias
  @param {*} opciones ES LA LISTA de sugerencias
  ["opcion1","opcion2","opcion3"]
 */
function addSugerencia(res, opciones) {
  res.fulfillmentMessages.push({
    "platform": "ACTIONS_ON_GOOGLE",
    "suggestions": {
      "suggestions": listaOpciones(opciones)
    }
  });
}
/**
  @param {*} opciones recibe la lista de opciones
  @returns Devuelve la lista en formato suggestions de Google
    [{"title" : valor1}, ...]
 */
function listaOpciones(opciones) {
  let resultado = [];
  for (let i = 0; i < opciones.length; i++) {
    resultado.push({ "title": opciones[i] });
  }
  return resultado;
}


/**
 * 
 * @param {*} res Añade a una respuesta basica un card
 * @param {*} titulo  Titulo del card
 * @param {*} texto  Texto principal
 * @param {*} imagen Imagen asociada
 */
function addCards(res, titulo, texto, imagen) {
  res.fulfillmentMessages.push(
    {
      "platform": "ACTIONS_ON_GOOGLE",
      "basicCard": {
        "title": titulo,
        "subtitle": titulo,
        "formattedText": texto,
        "image": {
          "imageUri": imagen,
          "accessibilityText": titulo
        }
      }
    }
  );
}

function reduceaOcho(opciones){
  let rest = []; //Array resultado con 8 opciones ordenadas de forma aleatoria
  let i= 0; // contador bucle
  let pos;  //posicion seleccionada

  while(i<8&&opciones.length > 0){
      pos = Math.floor(Math.random()*opciones.length);
      rest.push(opciones[pos]);
      opciones.splice(pos,1);
      i++;
  }
  return rest;
}
//Exportaciones
module.exports = {
  respuestaBasica: respuestaBasica,
  addSugerencia: addSugerencia,
  addCards: addCards,
  reduceaOcho:reduceaOcho
}