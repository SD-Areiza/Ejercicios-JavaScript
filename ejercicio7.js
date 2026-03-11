//inventario cafetería
const prompt = require('prompt-sync')();
let productos = [
    { nombre: "Café", precio: 2.5, cantidad: 10 },
    { nombre: "Té", precio: 2.0, cantidad: 15 },
    { nombre: "Pastel", precio: 3.0, cantidad: 5 }
];

function mostrarInventario() {
    console.log("Inventario de la cafetería:");
    productos.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto.nombre} - Precio: $${producto.precio.toFixed(2)}, Cantidad: ${producto.cantidad}`);
    });
}

function agregarProducto() {
    let nombre = prompt("Ingrese el nombre del producto: ");
    let precio = parseFloat(prompt("Ingrese el precio del producto: "));
    let cantidad = parseInt(prompt("Ingrese la cantidad del producto: "));
    productos.push({ nombre, precio, cantidad });
    console.log(`Producto ${nombre} agregado al inventario.`);
}

function eliminarProducto() {
    let indice = parseInt(prompt("Ingrese el número del producto a eliminar: ")) - 1;
    if (indice >= 0 && indice < productos.length) {
        let productoEliminado = productos.splice(indice, 1)[0];
        console.log(`Producto ${productoEliminado.nombre} eliminado del inventario.`);
    } else {
        console.log("Índice inválido.");
    }
}

function venderProducto() {
    let indice = parseInt(prompt("Ingrese el número del producto a vender: ")) - 1;
    if (indice >= 0 && indice < productos.length) {
        let productoVendido = productos[indice];
        if (productoVendido.cantidad > 0) {
            productoVendido.cantidad--;
            console.log(`Producto ${productoVendido.nombre} vendido. Cantidad restante: ${productoVendido.cantidad}`);
        } else {
            console.log(`El producto ${productoVendido.nombre} está agotado.`);
        }
    } else {
        console.log("Índice inválido.");
    }
}

do {
    let opcion = prompt("\n1. Mostrar inventario\n2. Agregar producto\n3. Eliminar producto\n4. Vender producto\n5. Salir\nSeleccione una opción: ");
    switch (opcion) {
        case "1":
            mostrarInventario();
            break;
        case "2":
            agregarProducto();
            break;
        case "3":
            eliminarProducto();
            break;
        case "4":
            venderProducto();
            break;
        case "5":
            console.log("Saliendo del programa.");
            break;
        default:
            console.log("Opción inválida.");
    }
} while (opcion !== "5");