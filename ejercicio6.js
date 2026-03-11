//meta de pasos diarios
const prompt = require('prompt-sync')();
let pasosDiarios = [];
const metaPasos = 10000;

function registrarPasos() {
    let cantidad = parseInt(prompt("¿Cuántos días desea registrar?: "));
    for (let i = 0; i < cantidad; i++) {
        let pasos = parseInt(prompt(`Ingrese los pasos del día ${i + 1}: `));
        pasosDiarios.push(pasos);
    }}
    
function evaluarMeta() {
    let totalPasos = pasosDiarios.reduce((total, pasos) => total + pasos, 0);
    let promedioPasos = totalPasos / pasosDiarios.length;
    console.log(`Total de pasos: ${totalPasos}`);
    console.log(`Promedio de pasos diarios: ${promedioPasos.toFixed(2)}`);
    if (totalPasos >= metaPasos) {
        console.log("¡Felicidades! Ha alcanzado su meta de pasos.");
    } else {
        console.log("No ha alcanzado su meta de pasos.");
    }
}

function mostrarResultados() {
    console.log("Resultados de los pasos diarios:");
    pasosDiarios.forEach((pasos, index) => {
        console.log(`Día ${index + 1}: ${pasos} pasos`);
    });
}

do {
    let opcion = prompt("\n1. Registrar pasos\n2. Evaluar meta de pasos\n3. Mostrar resultados\n4. Salir\nSeleccione una opción: ");
    if (opcion === "1") {
        registrarPasos();
    } else if (opcion === "2") {
        evaluarMeta();
    } else if (opcion === "3") {
        mostrarResultados();
    } else if (opcion === "4") {
        console.log("Saliendo del programa.");
        break;
    } else {
        console.log("Opción inválida.");
    }
} while (true);