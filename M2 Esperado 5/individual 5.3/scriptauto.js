

var verde = document.getElementById('verde');
var amarillo = document.getElementById('amarillo');
var rojo = document.getElementById('rojo');
var semaforo = document.getElementById('semaforo');
var boton = document.getElementsByClassName('botonsemaforo')


var intervalId;

function encenderVerde() {
	rojo.style.backgroundColor = 'black';
	amarillo.style.backgroundColor = 'black';
	verde.style.backgroundColor = 'green';
    
    setTimeout(encenderAmarillo, 3000);
}

function encenderAmarillo() {
	rojo.style.backgroundColor = 'black';
	amarillo.style.backgroundColor = 'yellow';
	verde.style.backgroundColor = 'black';
    setTimeout(encenderRojo, 1000);
}

function encenderRojo() {
	rojo.style.backgroundColor = 'red';
	amarillo.style.backgroundColor = 'black';
	verde.style.backgroundColor = 'black';

	setTimeout(encenderVerde, 3000);
}

function activarSemaforo() {
	encenderVerde();
	intervalId = setInterval(cambiarSemaforo, 7000);
}

activarSemaforo();






