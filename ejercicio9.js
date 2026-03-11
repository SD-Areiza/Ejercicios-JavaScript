//analizador de temperaturas
const prompt = require('prompt-sync')();
let temperaturas = [];

function agregarTemperatura() {
    let temp = parseFloat(prompt("Ingrese la temperatura: "));
    temperaturas.push(temp);
}

function mostrarTemperaturas() {
    console.log("Temperaturas registradas:");
    temperaturas.forEach((temp, index) => {
        console.log(`${index + 1}. ${temp.toFixed(2)}°C`);
    });
}

function calcularPromedio() {
    let suma = temperaturas.reduce((acc, temp) => acc + temp, 0);
    let promedio = suma / temperaturas.length;
    console.log(`El promedio de las temperaturas es: ${promedio.toFixed(2)}°C`);
}

function encontrarMaxMin() {
    let max = Math.max(...temperaturas);
    let min = Math.min(...temperaturas);
    console.log(`La temperatura máxima es: ${max.toFixed(2)}°C`);
    console.log(`La temperatura mínima es: ${min.toFixed(2)}°C`);
}

do {
    console.log("1. Agregar temperatura");
    console.log("2. Mostrar temperaturas");
    console.log("3. Calcular promedio");
    console.log("4. Encontrar máxima y mínima");
    console.log("5. Salir");
    let opcion = prompt("Seleccione una opción: ");
    switch (opcion) {
        case "1":
            agregarTemperatura();
            break;
        case "2":
            mostrarTemperaturas();
            break;
        case "3":
            calcularPromedio();
            break;
        case "4":
            encontrarMaxMin();
            break;
        case "5":
            console.log("Gracias por usar el analizador de temperaturas.");
            break;
        default:
            console.log("Opción inválida.");
    }
} while (opcion !== "5");