//gestor de gastos semanales
const prompt = require('prompt-sync')();
let Semana = ["", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
let historialGastos = [];
function calcularGastos() {
    for (let i = 1; i < Semana.length; i++) {
        let gasto = parseFloat(prompt(`Ingrese el gasto del día ${Semana[i]}: `));
        Semana[i] = gasto;
        historialGastos.push(gasto);
    }

}

function mostrarGastos() {
    console.log("Gastos semanales:");
    let totalGastos = historialGastos.reduce((total, gasto) => total + gasto, 0);
    console.log(`El gasto total de la semana es: $${totalGastos.toFixed(2)}`);
    let promedioGastos = totalGastos / 7;
    console.log(`El gasto promedio diario es: $${promedioGastos.toFixed(2)}`);
}
function consejo() {
    let totalGastos = historialGastos.reduce((total, gasto) => total + gasto, 0);
    let promedioGastos = totalGastos / 7;
    if (promedioGastos > 50000) {
        console.log("¡Estás gastando mucho! Considera ajustar tu presupuesto.");
    } else {
        console.log("Tu gasto es razonable. ¡Buen trabajo!");
    }
}

do { 
    console.log("1. Calcular gastos");
    console.log("2. Mostrar gastos");
    console.log("3. Consejos de ahorro");
    console.log("4. Salir");
    let opcion = prompt("Seleccione una opción: ");
    if (opcion === "1") {
        calcularGastos();
    } else if (opcion === "2") {
        mostrarGastos();
    }   else if (opcion === "3") {
        consejo();
    } else if (opcion === "4") {
        console.log("Saliendo del programa.");
        break;
    } else {
        console.log("Opción inválida.");
    }
} while (true);