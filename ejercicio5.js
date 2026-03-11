//reproductor de música
const prompt = require('prompt-sync')();
let canciones = [];
function agregarCancion() {
    let nombre = prompt("Ingrese el nombre de la canción: ");
    let artista = prompt("Ingrese el nombre del artista: ");
    canciones.push({ nombre, artista });
    console.log(`Canción "${nombre}" de ${artista} agregada a la lista.`);
}

function mostrarCanciones() {
    console.log("Lista de canciones:");
    canciones.forEach((cancion, index) => {
        console.log(`${index + 1}. "${cancion.nombre}" de ${cancion.artista}`);
    });
}

function eliminarCancion() {
    let indice = parseInt(prompt("Ingrese el número de la canción a eliminar: ")) - 1;
    if (indice >= 0 && indice < canciones.length) {
        let canciónEliminada = canciones.splice(indice, 1)[0];
        console.log(`Canción "${canciónEliminada.nombre}" de ${canciónEliminada.artista} eliminada de la lista.`);
    } else {
        console.log("Índice inválido.");
    }
}

function elegirCancion() {
    let indice = parseInt(prompt("Ingrese el número de la canción que desea reproducir: ")) - 1;
    if (indice >= 0 && indice < canciones.length) {
        let canciónSeleccionada = canciones[indice];
        console.log(`Reproduciendo "${canciónSeleccionada.nombre}" de ${canciónSeleccionada.artista}.`);
    } else {
        console.log("Índice inválido.");
    }
}

do {
    console.log("1. Agregar canción");
    console.log("2. Mostrar canciones");
    console.log("3. Eliminar canción");
    console.log("4. Elegir canción para reproducir");
    console.log("5. Salir");
    let opcion = prompt("Seleccione una opción: ");
    if (opcion === "1") {
        agregarCancion();
    } else if (opcion === "2") {
        mostrarCanciones();
    } else if (opcion === "3") {
        eliminarCancion();
    } else if (opcion === "4") {
        elegirCancion();
    } else if (opcion === "5") {
        console.log("Saliendo del programa.");
        break;
    } else {
        console.log("Opción inválida.");
    }
} while (true);