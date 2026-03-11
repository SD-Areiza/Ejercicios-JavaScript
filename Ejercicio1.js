//situación 1, carrito de compras
const prompt = require('prompt-sync')();
let opcion;
let carrito = [];
function agregarProducto() {
    let producto = prompt("Ingrese el nombre del producto: ");
    let precio = parseFloat(prompt("Ingrese el precio del producto: "));
    carrito.push({ nombre: producto, precio: precio });
    console.log(`Producto ${producto} agregado al carrito.`);
}

function mostrarCarrito() {
    console.log("Carrito de compras:");
    carrito.forEach((item, index) => {
        console.log(`${index + 1}. ${item.nombre} - $${item.precio.toFixed(2)}`);
    });
}

function eliminarProducto() {
    let indice = parseInt(prompt("Ingrese el número del producto a eliminar: ")) - 1;
    if (indice >= 0 && indice < carrito.length) {
        let productoEliminado = carrito.splice(indice, 1)[0];
        console.log(`Producto ${productoEliminado.nombre} eliminado del carrito.`);
    } else {
        console.log("Índice inválido.");
    }
}

do {
    console.log("1. Agregar producto");
    console.log("2. Mostrar carrito");
    console.log("3. Eliminar producto");
    console.log("4. Salir");
    let opcion = prompt("Seleccione una opción: ");
    switch (opcion) {
        case "1":
            agregarProducto();
            break;
        case "2":
            mostrarCarrito();
            break;
        case "3":
            eliminarProducto();
            break;
        case "4":
            console.log("Saliendo del programa.");
            break;
        default:
            console.log("Opción inválida.");
    }
} while (opcion !== "4");