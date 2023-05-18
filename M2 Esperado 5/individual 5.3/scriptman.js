

var verde = document.getElementById('verde');
var amarillo = document.getElementById('amarillo');
var rojo = document.getElementById('rojo');
var semaforo = document.getElementById('semaforo');
var boton = document.getElementsByClassName('botonsemaforo')







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

/*
document.addEventListener('mousemove', cambiarSemaforo)

function cambiarSemaforo(event) {
	var distX = event.clientX - semaforo.offsetLeft - semaforo.offsetWidth / 2;
	var distY = event.clientY - semaforo.offsetTop - semaforo.offsetHeight / 2;
	var mousePosition = Math.sqrt(distX * distX + distY * distY);
	
	if (mousePosition > 200) {
		encenderVerde();
	} else if (mousePosition >= 150 && mousePosition <= 200) {
		clearInterval();
		rojo.style.backgroundColor = 'black';
	    amarillo.style.backgroundColor = 'yellow';
	    verde.style.backgroundColor = 'black';
	} else {
		clearInterval();
		rojo.style.backgroundColor = 'red';
	    amarillo.style.backgroundColor = 'black';
	    verde.style.backgroundColor = 'black';
	}
}
*/

function cambiar (x,y){ 
	var controlx = (semaforo.offsetLeft + semaforo.offsetWidth)/2;
	var controly = (semaforo.offsetTop + semaforo.offsetHeight)/2;
	return Math.sqrt(Math.pow(x-controlx,2) + Math.pow(y-controly,2))
	
	}

semaforo.addEventListener('mouseover', function(event){
	var distancia = cambiar(event.clientX, event.clientY);
	if(distancia > 200){
		encenderVerde();
	}
	else if (distancia >= 150 && distancia <=200){
		rojo.style.backgroundColor = 'black';
	    amarillo.style.backgroundColor = 'yellow';
	    verde.style.backgroundColor = 'black';
	}
	else{
		rojo.style.backgroundColor = 'red';
	    amarillo.style.backgroundColor = 'black';
	    verde.style.backgroundColor = 'black';
	}

	
})




