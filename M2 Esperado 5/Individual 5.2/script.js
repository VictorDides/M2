var input = document.getElementById('valorInput')
var button = document.getElementById('boton')
var lista = document.getElementById('lista')
var texto = document.getElementById('texto')

function agrega(){
    var valor = input.value;
    var nuevo = document.createElement('p');
    nuevo.textContent = valor;
    texto.appendChild(nuevo);

}
button.addEventListener('click', agrega);

input.addEventListener('keypress', function(event) {
    var keycode = event.keyCode || event.which;
    if (keycode === 13) {
      agrega2();
    }
  });

  function agrega2(){
    var valor = input.value;
    var palabraFinal = valor.replace(/\d/g, '');
    var palabraMayuscula = palabraFinal.charAt(0).toUpperCase() + palabraFinal.slice(1, palabraFinal.length - 1) + palabraFinal.charAt(palabraFinal.length - 1).toUpperCase();
    var nuevo = document.createElement('p');
    nuevo.textContent = palabraMayuscula;
    texto.appendChild(nuevo);

    
}



