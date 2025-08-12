
let amigos = [];

function capturaAmigo() {
    let nombre = document.getElementById("nombre").value.trim();

    if (nombre === "") {
        alert("Introduce un nombre valido.");
        return;
    }

    amigos.push(nombre);
    //Limpia la caja
    document.getElementById("nombre").value = "";
}

function mostarLista() {
    let lista = document.getElementById("lista");

    lista.innerHTML = "";

    for (let posicion = 0; posicion < amigos.length; i++) {
        let elemento = document.createElement("li");
        elemento.texContent = amigos[posicion];
        lista.appendChild(elemento);
    }
}