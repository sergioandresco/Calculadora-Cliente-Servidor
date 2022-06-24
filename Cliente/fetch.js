const pantalla1 = document.getElementById('campo1');
const pantalla2 = document.getElementById('campo2');

//Listeners------------------------------------------------------
document.getElementById("igual").addEventListener("click", function() { exe("igual"); });

function exe() {
    const data = new FormData();
    if (arguments[0] == "igual") {
        alert("Calculando");
        data.append('igual', document.getElementById('igual').value);
    }

    data.append(pantalla1, document.getElementById('campo1').textContent);

    fetch(
            'http://localhost/Calculadora/Servidor/Metodo.php',

            {
                method: 'POST',
                body: data
            }
        )
        .then(function(response) {
            if (response.ok) {
                return response.text()
                    //console.log(response.json())
            } else {
                throw "Error en la llamada Fetch";
            }

        })
        .then(function(respuestaDelServidor) {
            document.getElementById('resp').innerHTML = respuestaDelServidor
            console.log(respuestaDelServidor);
        })
        .catch(function(err) {
            console.log(err);
        });

}