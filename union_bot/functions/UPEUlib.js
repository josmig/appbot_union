/**
 * Crea un respuesta basica a partir de un texto
 * @param {*} textoEnviar 
 * @returns la cadena JSON de respuesta
 */

function respuestaBasica(textoEnviar){
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
function addSugerencia(res,opciones){
  res.fulfillmentMessages.push({
        "platform": "ACTIONS_ON_GOOGLE",
        "suggestions": {
          "suggestions":listaOpciones(opciones)
          }
        });
}
/**
  @param {*} opciones recibe la lista de opciones
  @returns Devuelve la lista en formato suggestions de Google
    [{"title" : valor1}, ...]
 */
function listaOpciones(opciones){
  let resultado = [];
  for(let i=0; i< opciones.length;i++){
    resultado.push({"title": opciones[i]});
  }
  return resultado;
}





//Exportaciones
module.exports={
    respuestaBasica: respuestaBasica,
    addSugerencia : addSugerencia
}