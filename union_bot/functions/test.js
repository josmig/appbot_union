const upeu = require('./UPEUlib');

let contenido = upeu.respuestaBasica("¿Que tal?Me llamo Sophia seré tu asistente virtual. Estoy aquí para brindarte información sobre la UPeU.")
console.log(contenido);
console.log(JSON.stringify(contenido));