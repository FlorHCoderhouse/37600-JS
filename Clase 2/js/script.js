

/* 
let condicion = false;


if (condicion) {
    console.log('La condición es verdadera');
}
*/

/*
let edad = 20;
if (edad == 18) {
    alert('La condición es cierta, verdadera');
}
else {
    alert('La condición es falsa');
} */


/* let edadObligatoria = 18;
let edadOptativa = 16;
let edadLimite = 69;
let edadUsuario = parseInt(prompt('Ingresá tu edad'));

if (edadUsuario >= edadObligatoria && edadUsuario<=edadLimite) {
    alert('Estás obligado/a a Votar');
} else if (edadUsuario >= edadOptativa  || edadUsuario>edadLimite) {
    alert('Podés votar, si querés');
} else {
    alert('No podés votar todavía');
} 

alert('Terminó el proceso'); */







/* let booleana = false;
let esMenor = 37<28;
let esMayor = edadObligatoria>30;

if(esMayor){
    alert('Es mayor')
}else{
    alert('No es Mayor')
} */

/* let numero = 1;
let caracter ='1';

console.log(numero==caracter);
console.log(numero===caracter);

if((numero<2)&&(caracter=='1')){
    alert('Ambas condiciones son ciertas');
}


if ((numero < 2) || (caracter == '1')) {
    alert('Alguna de las condiciones es cierta, o ambas');
}

let verdadero = false;

if(!verdadero){

} */

/* let carrito;

if(!carrito){
    crearCarrito();
}else{
    agregarProductoaCarrito();
}
 */

/* 
let nombreUsuario = prompt('Ingresa tu nombre');

if (nombreUsuario == 'LAURA' || nombreUsuario == 'Laura' || nombreUsuario == 'laura'){
    alert('Hola '+nombreUsuario)
}else{
    alert('vos no sos Laura')
} */


/*
//Acá les dejo más ejemplos, además de los que vimos en clase
/* //If
if (1<2) {
    console.log('1 es menor que 2');
}

//if-else
if (1<3) {
    console.log('1 es menor que 3');
}else{
    console.log('1 no es menor que 3');
}

//if- else if
if (edad >= 18) {
    console.log('Puede abrir una cuenta full de Youtube');
} else if (edad >= 13) {
    console.log('Podés tener una cuenta pero le vamos a preguntar a tu responsable');
} else {
    console.log('Llama a tus padres');
}

console.log('Fin del condicional'); */

/*
//Variables booleanas

let edad = 12;
let miEdad = "37";
let edadLucas = prompt('Lucas, Ingresa tu edad');
let numeroA = 15;
let numeroB =320;

//Guardo un valor booleano explícito. Puede ser true o false
let variableBooleana = false;
//Guardo el resultado de una comparación, que es un valor true o false
let variableBooleanaB = (10>2);
//puedo guardar la comparación entre otras dos variables.
let variableBool = (numeroA<numeroB);
//El operador de igualdad estricta compara el valor de la variable y también el tipo de dato
let comparacion = (miEdad === edadLucas); */


//Operadores lógicos
//> Mayor que
//< Menor que
//>= Mayor o igual que
//<= Menor o igual que
//= asignación
//== comparacion de igualdad de valor
//=== comparacion estricta (compara el valor y el tipo de dato)
//!= distinto de
//!== distinto (estricto)

/* //Atención al orden de las condiciones a evaluar
let numero = 1;

if (numero < 10) {
    console.log('El numero es menor a 10');
} else if (numero < 5) {
    console.log('El numero es menor a 5');
} else {
    console.log('El numero es mayor a 10');
}  */


/* //Evaluamos directamente una variable booleana

let booleana = false;

if(booleana){
    console.log('La variable es false');
}else{
    console.log('La variable es true');
}  */

/* let palabra = parseInt("7");
let otraPalabra =7;

console.log(palabra===otraPalabra); */

/* let nombre = prompt('Ingresa tu nombre'); */
/* let apellido = prompt('Ingresa tu apellido');

if(nombre!='' || apellido!=''){
    alert('Bienvenido/a '+nombre+' '+apellido)
}else{
    alert('Faltan datos')
}
 */


/* if((nombre!='')&&(nombre=="Flor"||nombre=="flor")){
    alert("Bienvenida "+nombre)
}else{
    alert("No sos Flor")
} */

/* Condicional 

let edadConductor = parseInt(prompt('Ingrese su edad'));

if (edadConductor >= 18) {
    console.log('Puede conducir sin acompañante');
} else if (edadConductor < 18 && edadConductor >= 13) {//Este condicional está bien pero es redundante. Si el programa llegó hasta este bloque, es porque la primera condición es falsa. No hace falta la parte de edadConductor < 18 &&
    console.log('Puede conducir con un acompañante adulto responsable');
} else {
    console.log("No puede conducir, ni solo/a ni acompañado/a")
} */



/* let numeroEntero = parseInt(prompt('Ingresá un número'));
console.log(numeroEntero) */