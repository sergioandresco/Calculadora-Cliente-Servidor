document.getElementById('igual').addEventListener('click', function() { exe("enviar"); });
const botonesNumeros = document.getElementById('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

function exe() {
    const data = new FormData();
    if (arguments[0] == "enviar") {
        alert("Enviando numero");
        data.append('igual', document.getElementById('igual').textContent);
    }

    data.append('campo2', document.getElementById('campo2').value);
    data.append('campo1', document.getElementById('campo1').value);

    fetch(
            '../Servidor/Metodo.php',

            {
                method: 'POST',
                body: data
            }
        )
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
}



/*
formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('enviaste la operacion');

    var datos1 = new FormData(displayValorAnterior);

    console.log(datos1);

})
*/

/*
var formulario = document.getElementById('formulario');
const pantalla1 = document.getElementById('pantalla1');
const pantalla2 = document.getElementById('pantalla2');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('enviaste la operacion');

    var datos1 = new FormData(pantalla1);
    var datos2 = new FormData(pantalla2);

    console.log(datos1);
    console.log(datos2);

    /*
    fetch('http://localhost/Calculadora/Servidor/Metodo.php', {
        method: 'POST',
        body: datos
    })

    .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        */
//})
