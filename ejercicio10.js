//mini RPG
const prompt = require('prompt-sync')();
let vidaJugador = 100;
let vidaDragon = 150;
let inventario = ["poción de salud", "poción de salud", "poción de salud"];
function calcularDaño(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function turnoDragon() {
    calcularDaño(10, 25);
    vidaJugador -= calcularDaño(10, 25);
    console.log(`El dragón ataca y causa daño. Vida del jugador: ${vidaJugador}`);
}
function usarPocion() {
    if (inventario.includes("poción de salud")) {
        vidaJugador += 30;
        inventario.splice(inventario.indexOf("poción de salud"), 1);
        console.log(`Usaste una poción de salud. Vida del jugador: ${vidaJugador}`);
    } else {
        console.log("No tienes pociones de salud.");
    }
}
function atacar() {
    let daño = calcularDaño(15, 30);
    vidaDragon -= daño;
    console.log(`Atacas al dragón y causas ${daño} de daño. Vida del dragón: ${vidaDragon}`);
}

function mostrarInventario() {
    console.log("Inventario:");
    inventario.forEach((pocion, index) => {
        console.log(`${index + 1}. ${pocion}`);
    });
}

function mostrarMenu() {
    while (vidaJugador > 0 && vidaDragon > 0) {
        let opcion = prompt("\n1. Atacar\n2. Usar poción\n3. Mostrar inventario\n4. Te rendirás???\nSeleccione una opción: ");
        switch (opcion) {
            case "1":
                atacar();
                turnoDragon();
                break;
            case "2":
                usarPocion();
                turnoDragon();
                break;
            case "3":
                mostrarInventario();
                break;
            case "4":
                console.log("Gracias por jugar.");
                return;
            default:
                console.log("Opción inválida.");
        }
    }
}
mostrarMenu();
if (vidaJugador <= 0) {
    console.log("Has sido derrotado por el dragón.");
} else if (vidaDragon <= 0) {
    console.log("¡Felicidades! Has derrotado al dragón.");
}