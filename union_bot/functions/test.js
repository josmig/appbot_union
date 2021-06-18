const upeu = require('./UPEUlib');

let contenido = upeu.respuestaBasica("¿Que tal?Me llamo Sophia seré tu asistente virtual. Estoy aquí para brindarte información sobre la UPeU.")
console.log(contenido);
console.log(JSON.stringify(contenido));


/* let opciones = ["Opcion1","Opcion2","Opcion3"];
upeu.addSugerencia(contenido,opciones)
console.log(contenido);
console.log(JSON.stringify(contenido)); */

upeu.addCards(contenido,"Gluder Quispe","Cada área de la UPeU es como una colmena que trabaja con diligencia, con integridad; para cumplir la misión y para innovar, por ello, te invito a que nos visites frecuentemente y puedas beber de esta abundante savia que emana de esta universidad saludable.","rector.jpg")
console.log(contenido);
console.log(JSON.stringify(contenido));
 
let opciones = ["Opcion1","Opcion2","Opcion3","Opciones4","Opciones5","Opciones6","Opciones7","Opciones8","Opciones9","Opciones10","Opciones11","Opciones12"];
console.log(reduceaOcho(opciones));