/*
Les dejo los links a cada librería, donde pueden encontrar los scripts para linkear desde cdn, documentación, etc.
https://sweetalert2.github.io/
https://apvarun.github.io/toastify-js/
https://moment.github.io/luxon/#/
https://nosir.github.io/cleave.js/
 */

const btnSwal = document.getElementById('botonSwal');
const btnToast = document.getElementById('botonToast');
let carrito = ['zanahorias', 'papas', 'pepinos', 'manzanas', 'naranjas', 'zucchini']

btnSwal.onclick = () => {
    /* Swal.fire(

        {
    title:'Bienvenida',
    text:'Te damos la bienvenida a nuestra app',
    icon:'success',
    iconColor:'#81f40e',
    confirmButtonText:'Gracias',
    position:'top-center'
    
        }
    ) */


    /*  Swal.fire('Hola','Esto es un alert','info') */

    Swal.fire({

        title: 'Eliminar producto',
        text: '¿Está seguro de eliminar el producto?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, seguro',
        cancelButtonText: 'No, no quiero'
    }).then((result) => {
        if (result.isConfirmed) {
            //borrar();
            Swal.fire('Borrado', 'El producto ha sido eliminado', 'success')

        }
    })
}


Toastify({
    text: `Tenés ${carrito.length} productos en tu carrito`,
    duration: 1500,
    style: {
        background: "radial-gradient(circle, rgba(235,0,255,1) 10%, rgba(86,9,121,1) 65%, rgba(68,0,50,1) 93%)",//Este gradiente lo hice con https://cssgradient.io/
        color: 'white',
        width: '20vw',
        height: 80
    },
    offset: {
        x: '50%',
        y: 300,
    },
    onClick: () => {
        Toastify({
            text: 'Clickeaste un toast, yo te llevo a wikipedia',
            duration: 1000,
            position: 'left',
            destination: 'https://wikipedia.org'
        }).showToast();
    }
}).showToast()


const DateTime = luxon.DateTime;

const ahora = DateTime.now();
console.log(ahora);


const dt = DateTime.local(2022, 12, 8, 12, 15);
console.log(dt);

console.log(ahora.toString());
console.log(ahora.toLocaleString());
console.log(ahora.toLocaleString(DateTime.DATE_FULL));
console.log(ahora.toLocaleString(DateTime.DATE_HUGE));
console.log(ahora.toLocaleString(DateTime.TIME_SIMPLE));

const parrafo = document.getElementById('horaActual');
parrafo.innerText = ahora.toLocaleString(DateTime.TIME_SIMPLE);




//Ejemplo integrador de librerías
const btnCalcular = document.getElementById('calcular');

window.onload = () => {
    let dates = document.querySelectorAll('input[type="date"]');
    let inicio = DateTime.now().toFormat('yyyy-MM-dd');
    let fin = DateTime.now().plus({ months: 4 }).toFormat('yyyy-MM-dd');
    dates.forEach(element => {
        element.setAttribute("min", inicio);
        element.setAttribute("max", fin);

    });

}

function calcularEstadia(checkIn, checkOut) {
    let total = checkOut.diff(checkIn);
    return total.as('days');

}

function calcularPrecioTotal(estadia, precio) {
    return estadia * precio;
}
btnCalcular.addEventListener('click', () => {
    let checkIn = DateTime.fromISO(document.getElementById('checkIn').value);
    let checkOut = DateTime.fromISO(document.getElementById('checkOut').value);
    let estadia = calcularEstadia(checkIn, checkOut);
    let precioTotal = calcularPrecioTotal(estadia, 2000);
    Swal.fire({
        title: 'Resultado',
        text: `Tu estadía de ${estadia} días tiene un precio total de $${precioTotal}`,
        icon: 'info',
        iconColor: '#00ff00',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        position: 'top-center',
        backdrop: '#445566aa'
    })

})


/* ---------------------------------- */
//Código para tarjeta de crédito

const selectAnio = document.querySelector('#anio'),
    selectMes = document.querySelector('#mes'),
    form = document.querySelector('#formulario'),
    nombreTitular = document.querySelector('.inputNombre'),
    numeroTarjeta = document.querySelector('.inputNumTarjeta'),
    mesVencimiento = document.querySelector('.inputMes'),
    anioVencimiento = document.querySelector('.inputAnio'),
    codSeguridad = document.querySelector('.inputCodSeguridad'),
    btnEnviar = document.querySelector('#btnEnviar'),
    anios = [2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030],
    meses = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

function cargarSelect(array, select) {
    array.forEach(element => {
        let option = `<option>${element}</option>`
        select.innerHTML += option;
    })
}

cargarSelect(anios, selectAnio);
cargarSelect(meses, selectMes);

function agregarContenido(ingreso, caja) {
    ingreso.oninput = () => {
        document.querySelector(caja).innerText = ingreso.value;
    }
}

agregarContenido(numeroTarjeta, '.cajaNumTarjeta');
agregarContenido(nombreTitular, '.cajaNombre');
agregarContenido(mesVencimiento, '.mesVencimiento');
agregarContenido(anioVencimiento, '.anioVencimiento');
agregarContenido(codSeguridad, '.cajaCodSeguridad');


codSeguridad.onmouseover = () => {
    document.querySelector('.frente').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.dorso').style.transform = 'perspective(1000px) rotateY(0deg)';
}

codSeguridad.onmouseout = () => {
    document.querySelector('.frente').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.dorso').style.transform = 'perspective(1000px) rotateY(180deg)';
}


let cleave = new Cleave(numeroTarjeta, {
    creditCard: true,
    onCreditCardTypeChanged: (type) => {
        const logos = document.querySelectorAll('.logoTarjeta');
        logos.forEach(element => {
            element.src = `./img/${type}.png`
        })
    }
})

btnEnviar.addEventListener('click', (e) => {
    e.preventDefault();


    const data = {
        nombre: nombreTitular.value,
        numeroTarjeta: numeroTarjeta.value,
        mes: mesVencimiento.value,
        anio: anioVencimiento.value,
        codSeguridad: codSeguridad.value
    };


    Swal.fire({
        title: '¿Deseas guardar los datos de la tarjeta?',
        showCancelButton: true,
        position: 'top-center',
        width: 400,
        confirmButtonText: 'Guardar',

    }).then((result) => {
        formulario.reset();
        if (result.isConfirmed) {
            localStorage.setItem('data', JSON.stringify(data));
            Swal.fire('Datos guardados', '', 'success');
            setTimeout(() => {
                location.reload();
            }, 2000);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire('Los datos no se guardaron', 'Le tenes miedo al éxito', 'error');
            setTimeout(() => {
                location.reload();
            }, 2000);
        }
    })

})