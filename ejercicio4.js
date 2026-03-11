//clasificador de notas
const prompt = require('prompt-sync')();
let calificaciones = [];
function registrarCalificaciones() {
    let cantidad = parseInt(prompt("¿Cuántas calificaciones desea ingresar?: "));
    for (let i = 0; i < cantidad; i++) {
        let calificación = parseFloat(prompt(`Ingrese la calificación ${i + 1}: `));
        calificaciones.push(calificación);
    }
}

function clasificarCalificaciones() {
    calificacion = calificaciones.map(calificacion => {
        if (calificacion >= 3.0) {
            return "aprobado";
        } else {
            return "reprobado";
        }
    });
}

function mostrarResultados() {
    console.log("Resultados de las calificaciones:");
    calificaciones.forEach((calificacion, index) => {
        console.log(`Calificación ${index + 1}: ${calificacion} - ${calificacion >= 3.0 ? "aprobado" : "reprobado"}`);
    });
}

do {
    let opcion = prompt("\n1. Registrar calificaciones\n2. Clasificar calificaciones\n3. Mostrar resultados\n4. Salir\nSeleccione una opción: ");
    if (opcion === "1") {
        registrarCalificaciones();
    } else if (opcion === "2") {
        clasificarCalificaciones();
    } else if (opcion === "3") {
        mostrarResultados();
    } else if (opcion === "4") {
        console.log("Saliendo del programa.");
        break;
    } else {
        console.log("Opción inválida.");
    }} while (opcion !== "4");