const upeu = require('./UPEUlib');

let contenido = upeu.respuestaBasica("¿Que tal?Me llamo Sophia seré tu asistente virtual. Estoy aquí para brindarte información sobre la UPeU.")
console.log(contenido);
console.log(JSON.stringify(contenido));


let opciones = ["Opcion1","Opcion2","Opcion3"];
upeu.addSugerencia(contenido,opciones)
console.log(contenido);
console.log(JSON.stringify(contenido));