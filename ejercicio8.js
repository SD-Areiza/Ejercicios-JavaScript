//máquina expendedora
const prompt = require('prompt-sync')();
let productos = [
    { nombre: "Refresco", precio: 1.5, cantidad: 10 },
    { nombre: "Snack", precio: 2.0, cantidad: 5 },
    { nombre: "Agua", precio: 1.0, cantidad: 15 }
];

function mostrarProductos() {
    console.log("Productos disponibles:");
    productos.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto.nombre} - Precio: $${producto.precio.toFixed(2)}, Cantidad: ${producto.cantidad}`);
    });
}

function comprarProducto() {
    let indice = parseInt(prompt("Ingrese el número del producto que desea comprar: ")) - 1;    
}if (indice >= 0 && indice < productos.length) {
    let productoSeleccionado = productos[indice];
    if (productoSeleccionado.cantidad > 0) {
        productoSeleccionado.cantidad--;
        console.log(`Producto ${productoSeleccionado.nombre} comprado. Cantidad restante: ${productoSeleccionado.cantidad}`);
    } else {
        console.log(`El producto ${productoSeleccionado.nombre} está agotado.`);
    }
} else {
    console.log("Índice inválido.");
}

function agregarProducto() {
    let nombre = prompt("Ingrese el nombre del producto: ");
    let precio = parseFloat(prompt("Ingrese el precio del producto: "));
    let cantidad = parseInt(prompt("Ingrese la cantidad del producto: "));
    productos.push({ nombre, precio, cantidad });
    console.log(`Producto ${nombre} agregado a la máquina expendedora.`);
}

do {
    let opcion = prompt("\n1. Mostrar productos\n2. Comprar producto\n3. Agregar producto\n4. Salir\nSeleccione una opción: ");
    switch (opcion) {
        case "1":
            mostrarProductos();
            break;
        case "2":
            comprarProducto();
            break;
        case "3":
            agregarProducto();
            break;
        case "4":
            console.log("Gracias por usar la máquina expendedora.");
            break;
        default:
            console.log("Opción inválida.");
    }
} while (opcion !== "4");