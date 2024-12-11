// PROGRAMACION + GIT Y GITHUB | APRENDIZAJE

// variables y tipo de datos:

var nombre = "DG";
const pi = 3.14;
let edad = 20;

let boolean1 = true // true or false 
let number1 = 1000000000 // numero entero 10,20 etcs
let string1 = "" // tipo texto 
let object1 = {
  nombre: "godie",
  edad: 25,
} // va entre {}
let array1 = [0,1] // va entre []
let function1 = ()=>{} // craer una variable de tipo funcion 
let null1 = null; // variable nula que no tine dato
let undefined1 = undefined; // es un tipo de daro que no esta definido
let nan1 = NaN; // variable error de tipo de ndato no numerico 

let imprimirTipoDeDatos = ()=> {
  console.log(typeof boolean1);
  console.log(typeof number1);
  console.log(typeof string1);
  console.log(typeof object1);
  console.log(Array.isArray(array1));
  console.log(typeof function1);
  object1.nombre = "diego";
  console.log(object1.nombre);
  array1[0] = 1; // re asignacion
  console.log(array1);
}

imprimirTipoDeDatos();

// REASIGNACION Y MANIPULACION DE LA INFORMACION 