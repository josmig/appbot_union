'use strict'

//creacion de json
let valor = {
    "nombre":"Miguel",
    "apellidos":"Pantigoso"
}

console.log('valor' + valor);
console.log("valor str="+ JSON.stringify(valor));
/* El metodo JSON.stringify es para volver cualquier cosa en*/

//accediendo a cada valor de un array
console.log('valor = ' + valor.nombre +" " + valor.apellidos);

//Creadno como un template string
let valor2 = {
    nombre:'Miguel',
    apellido:'Pantigoso',  
}
console.log(valor2);

//Array que contiene dos objetos
let array1 = [
    {nombre:'Pepe',apellido:'Mamani'},
    {nombre:'Juan',apellido:'Lopez'}
]
console.log(array1);

for(let i=0;i<array1.length;i++){
    console.log(array1[i]);
}






