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

//========== FUNCIONES FLECHA (Arrow Functions) ==========
//Las funciones flecha (arrow functions) en JavaScript son una forma más corta de escribir funciones introducida en ES6 (ECMAScript 2015).
//Tienen una sintaxis compacta y un comportamiento especial con respecto a this.
//          ----Características principales----
//1) Sintaxis más corta: No requieren la palabra clave function.
//2) return implícito: Si el cuerpo es una sola expresión, el valor se devuelve automáticamente.
//3) this léxico: No crean su propio this; heredan el this del contexto donde fueron definidas.
//4) No tienen arguments: Si necesitas acceder a los argumentos, usa parámetros rest (...args).
//5) No se pueden usar como constructores: No funcionan con new.

//Sintaxis: const nombreFuncion = (parámetros) => expresión;

//========== MÉTODOS DE ARRAYS CON FUNCIONES FLECHA ==========

// FILTER
// Definición: Crea un nuevo array con los elementos que cumplan una condición.
// Sintaxis: array.filter((elemento) => condición)
// Retorna: Array nuevo con los elementos filtrados
// Ejemplo: carrito.filter(producto => producto.precio > 100)

// MAP
// Definición: Transforma cada elemento del array aplicando una función.
// Sintaxis: array.map((elemento) => transformación)
// Retorna: Array nuevo con los elementos transformados
// Ejemplo: carrito.map(producto => producto.precio * 0.90)

// REDUCE
// Definición: Acumula valores del array en un único resultado.
// Sintaxis: array.reduce((acumulador, elemento) => operación, valorInicial)
// Retorna: Un único valor (número, objeto, etc.)
// Ejemplo: carrito.reduce((total, producto) => total + producto.precio, 0)

// FOREACH
// Definición: Ejecuta una función para cada elemento del array (no retorna nada).
// Sintaxis: array.forEach((elemento, índice) => operación)
// Retorna: undefined (se usa por sus efectos secundarios)
// Ejemplo: carrito.forEach((producto, i) => console.log(i + 1, producto.nombre))

// POP
// Definición: Elimina el último elemento del array y lo retorna.
// Sintaxis: array.pop()
// Retorna: El elemento eliminado
// Ejemplo: const ultimoProducto = carrito.pop()

// PUSH
// Definición: Añade uno o más elementos al final del array.
// Sintaxis: array.push(elemento1, elemento2, ...)
// Retorna: La nueva longitud del array
// Ejemplo: carrito.push({nombre: 'Monitor', precio: 300})

// SHIFT
// Definición: Elimina el primer elemento del array y lo retorna.
// Sintaxis: array.shift()
// Retorna: El elemento eliminado
// Ejemplo: const primerProducto = carrito.shift()

// UNSHIFT
// Definición: Añade uno o más elementos al inicio del array.
// Sintaxis: array.unshift(elemento1, elemento2, ...)
// Retorna: La nueva longitud del array
// Ejemplo: carrito.unshift({nombre: 'Pantalla', precio: 200})

// FIND
// Definición: Retorna el primer elemento que cumple una condición.
// Sintaxis: array.find((elemento) => condición)
// Retorna: El elemento encontrado o undefined
// Ejemplo: carrito.find(producto => producto.nombre === 'Laptop')

// SOME
// Definición: Verifica si al menos un elemento cumple una condición.
// Sintaxis: array.some((elemento) => condición)
// Retorna: true o false
// Ejemplo: carrito.some(producto => producto.precio > 1000)

// EVERY
// Definición: Verifica si todos los elementos cumplen una condición.
// Sintaxis: array.every((elemento) => condición)
// Retorna: true o false
// Ejemplo: carrito.every(producto => producto.precio > 0)

// SORT
// Definición: Ordena los elementos del array (modifica el array original).
// Sintaxis: array.sort((a, b) => a - b)
// Retorna: El array ordenado
// Ejemplo: carrito.sort((a, b) => a.precio - b.precio)