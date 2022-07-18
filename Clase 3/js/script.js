/* 
//Bucle for
for(let i  = 1; i<=3;i++){

alert('Usted es el jefe de los minisuper? Esta es la repetición '+i+' del bucle')

} 
alert('Gracias, vuelvan prontos');
*/

/* for (let i = 0; i < 3; i++) {
    alert('Usted es el jefe de los minisuper?');
    console.log('Repetición n°' + (i+1));
}
alert('Gracias, vuelvan prontos'); */

//i++ es el equivalente de decir
//i =i+1

/* 
let oportunidades = 3;
for(let i = 1; i<=oportunidades; i++){
    alert('Usaste tu oportunidad n°'+i);
}
 */


/* 
//Acá hacemos una cuenta regresiva
for(let i = 10; i>0; i--){
    alert('Faltan '+i+ ' segundos para 2023!')
}

alert('feliz año nuevo. El primer bebé del año se llama...'); */

/* 
//Podemos usar el valor de la variable i para hacer operaciones en cada iteración

for (let i = 1; i <= 10; i++) {
    console.log('3 * ' + i + ' = ' + (3 * i));
} */

/* 
//Le pedimos un dato al usuario
let numeroElegido = parseInt(prompt('Elegí un número para mostrarte la tabla'))

for (let i = 0; i <= 10; i++) {
    console.log(numeroElegido+' * ' + i + ' = ' + (numeroElegido * i));
} */

/* 
//Le pedimos un dato al usuario en cada iteración
let nombre;

for(let i = 0;i<3;i++){
    nombre = prompt ('Ingresá tu nombre');
    alert('Buen día, '+ nombre);
} */


/* 
//Sentencia break
let savedPass = 'palabra';

for (let i = 0; i < 3; i++) {
    let userPass = prompt('Ingresá tu contraseña');
    if (savedPass === userPass) {
        alert('Login exitoso!');
        break;
    }


}

alert('fin del proceso');
 */

/* 
//sentencia continue
for (let i = 1; i <= 10; i++) {
  if (i == 4) {
    alert("sapo muerto");
    continue;
  }
  alert(i);
}

alert("Fin del juego"); */


/* 
//Bucle while
let repetir = true;

while(repetir){
    console.log('Soy un bucle while');
    repetir=false;
} */

/* 
//Este bucle es infinito
while(true){
    console.log('Soy un bucle while');
} */


/* 
//Este bucle también es infinito
let noLlegamos = true;

while(noLlegamos){
    alert('ya llegamos a la India?');
} */

/* 
//while con una variable numérica
let contador = 0;

while (contador < 5) {
    alert('Soy un bucle while');
    contador++;
} */

/* let edad = parseInt(prompt('Ingresa tu edad'));

while (edad < 13) {
    console.log('No podés pasar. Tenés que tener 13 o más');
    edad = parseInt(prompt('Ingresa tu edad'));

}

alert('Bienvenido/a'); */

/* let palabraClave = 'pepito';
let palabraUsuario = prompt('Ingresa tu palabra')

while(palabraClave != palabraUsuario){
    alert('Palabra incorrecta');
    palabraUsuario = prompt('Ingresa tu palabra');
} */

/* let passGuardado = "messi";
let continuar = true;
let passUsuario = prompt("Ingresá tu contraseña");


while (continuar) {
  
  if (passGuardado === passUsuario) {
    alert("Bienvenido/a");
    continuar = false;
    break;
  }

  alert('Contraseña incorrecta');
    passUsuario = prompt("Ingresá tu contraseña");
} */

/* 
//Bucle do...while
let condicion = false;

do{
    console.log('Soy un bucle do...while');
}while(condicion); */

/* do {
    let passUsuario = prompt('Ingresa tu contraseña');
    if (passGuardado == passUsuario) {
        alert('Bienvenido/a');
        continuar=false;
        break;}
} while (condition); */

/*
//Switch 
let opcion = prompt('Elegí una opción: \n1 - Té \n2 - Café \n3 - Chocolate');


if (opcion == '1') {
    alert('Elegiste un té');
} else if (opcion == '2') {
    alert('Elegiste un café');
} else if (opcion == '3') {
    alert('Elegiste un chocolate');
} else {
    alert('Elegiste una opción inválida');
}



switch (opcion) {
    case '1':
        alert('Elegiste un té');
        break;
    case '2':
        alert('Elegiste un café');
        break;
    case '3':
        alert('Elegiste un chocolate');
        break;
    default:
        alert('Elegiste una opción inválida');
        break;
}

*/