//taquilla de cine
const prompt = require('prompt-sync')();
let asientos = Array(10).fill(false); // false indica que el asiento está libre

function mostrarAsientos() {
    console.log("Asientos disponibles (X = ocupado, O = libre):");
    asientos.forEach((ocupado, index) => {
        process.stdout.write(ocupado ? "X " : "O ");
        if ((index + 1) % 5 === 0) {
            console.log();
        }
    });
}

function reservarAsiento() {
    let numeroAsiento = parseInt(prompt("Ingrese el número del asiento que desea reservar (1-10): ")) - 1;
    if (numeroAsiento >= 0 && numeroAsiento < 10) {
        if (!asientos[numeroAsiento]) {
            asientos[numeroAsiento] = true;
            console.log("Asiento reservado con éxito.");
        } else {
            console.log("El asiento ya está ocupado.");
        }
    } else {
        console.log("Número de asiento inválido.");
    }
}

function cancelarReserva() {
    let numeroAsiento = parseInt(prompt("Ingrese el número del asiento que desea cancelar (1-10): ")) - 1;
    if (numeroAsiento >= 0 && numeroAsiento < 10) {
        if (asientos[numeroAsiento]) {
            asientos[numeroAsiento] = false;
            console.log("Reserva cancelada con éxito.");
        } else {
            console.log("El asiento ya está libre.");
        }
    } else {
        console.log("Número de asiento inválido.");
    }
}

let opcion;
while (opcion !== 4) {
    console.log("1. Mostrar asientos");
    console.log("2. Reservar asiento");
    console.log("3. Cancelar reserva");
    console.log("4. Salir");
    opcion = parseInt(prompt("Seleccione una opción: "));
    if (opcion === 1) {
        mostrarAsientos();
        break
    } else if (opcion === 2) {
        reservarAsiento();
        break
    } else if (opcion === 3) {
        cancelarReserva();
        break
    } else if (opcion === 4) {
        console.log("Saliendo del programa.");
        break
    } else {
        console.log("Opción inválida.");
    }}