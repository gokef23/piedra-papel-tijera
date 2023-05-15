var armaSeleccionada = "";

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
    var boton = document.createElement("button");
    boton.innerHTML = valorBoton;
    boton.onclick = funcionOnClick;
    padre.appendChild(boton);
  }
  

function mostrarResultado(arma1, arma2, resultado) {
    document.getElementById("Resultado").innerHTML = "El resultado es -> " + resultado + " (Jugador: " + arma1 + " / Oponente: " + arma2 + ")";
}

function jugar(armaJugador) {
    armaSeleccionada = armaJugador;
    var armaOponente = seleccionArmaOponente();
    var resultado;
    // window.alert("El jugador eligió " + armaJugador);
    // window.alert("El oponente eligió " + seleccionArmaOponente());

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

    crearBoton("botones");
}


