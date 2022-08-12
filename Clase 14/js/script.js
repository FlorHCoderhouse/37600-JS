/* console.log('Soy el primer console log');

setTimeout(()=>{
    console.log('Soy un console log intermedio');
},2500);

console.log('Soy el console log final'); */



/* 

const btn = document.querySelector('#btn')
const foto = document.querySelector('.foto')

let tiempo = 1000
btn.addEventListener('click',()=>{
    foto.classList.add('visible');
    setTimeout(()=>{
        foto.classList.remove('visible')
    },tiempo);
}); */
/* for (let letra of "hola") {
    console.log(letra)
}
for (let letra of "mundo") {
    console.log(letra)
} */

/* for (let letra of "hola") {
    setTimeout(() => {
        console.log(letra)
    }, 1500)

}
for (let letra of "mundo") {
    setTimeout(() => {
        console.log(letra)
    }, 3000)
} */

/* let contador = 0;
const intervalo = setInterval(() => {
    console.log('Tic');
    console.log('Contador:', contador);
    contador++;

    contador > 5 && clearInterval(intervalo)

}, 1000) */


/* console.log("Inicio");
const fin = setTimeout(() => {
    console.log("fin")
}, 2000)
//clearTimeout(fin)

contador = 0;
if (contador > 6) {
    clearTimeout(fin)} */

/* new Promise((resolve, reject) => {
    //cuerpo de la promesa
})

const eventoFuturo = () => {
    return new Promise((resolve, reject) => {
        //cuerpo de la promesa
    })
}

console.log(eventoFuturo()); */

const eventoFuturo = (respuesta) => {
    return new Promise((resolve, reject) => {
        /* if (respuesta === true) {
            resolve('Promesa Resuelta');
        } else {
            reject('Promesa rechazada');
        } */

//Acá vemos lo que pasa si ponemos una demora en la respuesta. Fijense lo que nos devuelve el console.log de las líneas 93 y 94. Para solucionarlo, usamos el .then()
        setTimeout(() => {
            respuesta === true ? resolve('Yupiiii') : reject('D\'oh');
        }, 2000)
    })
}


console.log(eventoFuturo(true));
console.log(eventoFuturo(false));

eventoFuturo(true).then((response)=>{
    console.log(response);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log('Fin de la ejecución');
})


/* 
//Ejemplo de una llamada a una base de datos, que usa una promesa para devolver su respuesta

const DB = [{
    id: 1,
    nombre: 'Café',
    precio: 390
},
{
    id: 2,
    nombre: 'Bagel con queso',
    precio: 450
},
{
    id: 3,
    nombre: 'Carrot Cake',
    precio: 470
},
{
    id: 4,
    nombre: 'Frapucchino',
    precio: 430
},
]

const pedirProductos =()=>{
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(DB)
    },500)
})

}

const lista = document.querySelector('#productos');
const btnProductos = document.querySelector('#btnProductos');
const btnCarrito = document.querySelector('#btnCarrito');
let carritoHTML = document.querySelector('#prodCarrito');

let carrito = [];

const renderProductos = (array) => {
    array.forEach(element => {
        let html = `<li>${element.nombre} $ ${element.precio}</li>
        <button class="agregar" id=${element.nombre}>Agregar</button>`
        lista.innerHTML += html;
    })
}



btnProductos.addEventListener('click',()=>{
    pedirProductos().then((response)=>{
        let productos = response;
        //console.log(productos);
renderProductos(productos);
    }).then(()=>{
        const btnAgregar = document.querySelectorAll('button.agregar');
            //console.log(btnAgregar);
            btnAgregar.forEach(element => {
                element.onclick = () => {
                    carrito.push(element.id)
                }
            })
    })
})

btnCarrito.onclick = () => {
    carritoHTML.innerHTML = '';
    carrito.forEach(element => {
        let html = `<li>${element} agregado al carrito</li>`
        carritoHTML.innerHTML += html

    });
}


 */

/*
//Ejemplo que usamos en Loupe
setTimeout(function timeout() {
    console.log('Hola mundo')
}, 0);

function multiplicar(x, y) {
    return x * y;
}

function mostrarCuadrado(x) {
    let resultado = multiplicar(x, x);
    console.log(resultado);
}
mostrarCuadrado(3); 
*/