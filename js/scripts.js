var armaSeleccionada = "";

let rondaAnterior = localStorage.getItem("rondaActual");
if (!rondaAnterior) {
    rondaAnterior = 0;
    localStorage.setItem("rondaActual", rondaAnterior);
}

function mostrarArma(nombreArma) {
    document.getElementById("armaJugador").src = "icons/" + nombreArma;
}

function ocultarArma() {
    if (armaSeleccionada === "") {
        document.getElementById("armaJugador").src = "";
    }
}

function checkRandoms() {
    var lista = "";
    for (i = 0; i < 10; i++) {
        lista = lista.concat(Math.floor(Math.random() * 3)) + " ";
    }
    window.alert(lista);
}

function seleccionArmaOponente() {
    const armas = ["Piedra", "Papel", "Tijera"];

    let armaOponente = Math.floor(Math.random() * 3);
    // window.alert("El oponente eligió " + armas[armaOponente]);
    return armas[armaOponente];
}

function crearBoton(idElementoPadre, valorBoton, funcionOnClick) {
    var padre = document.getElementById(idElementoPadre);
    var boton = document.createElement("input");
    boton.type = "button";
    boton.value = valorBoton;
    boton.onclick = funcionOnClick;
    padre.appendChild(boton);
}

function mostrarResultado(arma1, arma2, resultado) {
    // var rondaAnterior = localStorage.getItem("rondaActual");
    rondaAnterior++;
    localStorage.setItem("rondaActual", rondaAnterior);

    // var rondaAnterior = localStorage.getItem("rondaActual");


    document.getElementById("Resultado").innerHTML = "Ronda " + rondaAnterior + "<br />" + "El resultado es -> " + resultado + " (Jugador: " + arma1 + " / Oponente: " + arma2 + ")";
}

function recargarPagina() {
    location.reload();
}

function jugar(armaJugador) {
    armaSeleccionada = armaJugador;
    var armaOponente = seleccionArmaOponente();
    var resultado;

    // document.getElementById("armaOponente").src = "icons/" + armaOponente;

    for (let element of document.getElementsByClassName("botones")) {
        element.style.display = "none";
    }

    document.getElementById("armaJugador").src = "icons/" + armaSeleccionada + ".png";
    document.getElementById("armaOponente").src = "icons/" + armaOponente + ".png";
    if (armaSeleccionada === armaOponente) {
        resultado = "Empate";
    } else if (armaSeleccionada === "Piedra" && armaOponente === "Tijera") {
        resultado = "Ganador: Jugador";
    } else if (armaSeleccionada === "Papel" && armaOponente === "Piedra") {
        resultado = "Ganador: Jugador";
    } else if (armaSeleccionada === "Tijera" && armaOponente === "Papel") {
        resultado = "Ganador: Jugador";
    } else {
        resultado = "Ganador: Oponente";
    }
    mostrarResultado(armaSeleccionada, armaOponente, resultado);

    if (rondaAnterior >= 5) {
        localStorage.removeItem("rondaActual");
        crearBoton("botonera", "Reiniciar", recargarPagina);
    } else {
        crearBoton("botonera", "Siguiente Nivel", recargarPagina);
    }
}


