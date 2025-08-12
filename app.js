
let amigos = [];

function capturaAmigo(){
    let nombre = document.getElementById("nombre").value.trim();

    if (nombre === ""){
        alert("Introduce un nombre valido.");
        return;
    }

    amigos.push(nombre);
    //Limpia la caja
    document.getElementById("nombre").value = "";
}