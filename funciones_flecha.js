const carrito = [
    { nombre: 'Laptop', precio: 1000, categoria: 'tech' },
    { nombre: 'Silla', precio: 150, categoria: 'muebles' },
    { nombre: 'Mouse', precio: 50, categoria: 'tech' },
    { nombre: 'Teclado', precio: 80, categoria: 'tech' }
];

// Usamos funciones flecha encadenadas para procesar los datos
const totalTechConDescuento = carrito
    .filter(producto => producto.categoria === 'tech') // 1. Filtramos solo tecnología
    .map(producto => producto.precio * 0.90)           // 2. Aplicamos 10% de descuento
    .reduce((acumulado, precio) => acumulado + precio, 0); // 3. Sumamos todo

console.log(`El total a pagar es: $${totalTechConDescuento}`); 
// Resultado: $1017 (900 + 45 + 72)

//Las funciones flecha (arrow functions) en JavaScript son una forma más corta de escribir funciones introducida en ES6 (ECMAScript 2015).
//Tienen una sintaxis compacta y un comportamiento especial con respecto a this.
//          ----Características principales----
//1) Sintaxis más corta: No requieren la palabra clave function.
//2) return implícito: Si el cuerpo es una sola expresión, el valor se devuelve automáticamente.
//3) this léxico: No crean su propio this; heredan el this del contexto donde fueron definidas.
//4) No tienen arguments: Si necesitas acceder a los argumentos, usa parámetros rest (...args).
//5) No se pueden usar como constructores: No funcionan con new.