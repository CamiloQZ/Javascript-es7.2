// Ejercicio 1
const numeros1 = [2, 4, 6, 8, 10];

// map recorre el arreglo y multiplica cada número por 2
const resultado1 = numeros.map(num => num * 2);

console.log(resultado1); // [4, 8, 12, 16, 20]


// Ejercicio 2
const nombres2 = ["ana", "luis", "marta", "pedro"];

const mayusculas = nombres2.map(nombre => nombre.toUpperCase());

console.log(mayusculas);


// Ejercicio 3
const palabras3 = ["sol", "computador", "mesa", "javascript"];

const longitudes = palabras3.map(palabra => palabra.length);

console.log(longitudes); // [3, 10, 4, 10]


// Ejercicio 4
const numeros4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = numeros4.filter(num => num % 2 === 0);

console.log(pares);


// Ejercicio 5
const palabras5 = ["casa", "ventana", "sol", "computadora", "luz"];

const largas = palabras5.filter(p => p.length > 5);

console.log(largas);


// Ejercicio 6
const estudiantes = [
    { nombre: "Ana", nota: 4.5 },
    { nombre: "Luis", nota: 2.8 },
    { nombre: "Marta", nota: 3.7 },
    { nombre: "Carlos", nota: 2.5 }
];

const aprobados = estudiantes.filter(est => est.nota >= 3.0);

console.log(aprobados);


// Ejercicio 7
const numeros7 = [5, 10, 15, 20];

const Suma = numeros7.reduce((acum, num) => acum + num, 0);

console.log(suma); // 50


// Ejercicio 8
const numeros8 = [2, 3, 4];

const producto = numeros8.reduce((acum, num) => acum * num, 1);

console.log(producto); // 24


// Ejercicio 9
const palabras = ["hola", "mundo", "js"];

const total9 = palabras.reduce((acum, palabra) => acum + palabra.length, 0);

console.log(total9);


// Ejercicio 10
const numeros10 = [45, 12, 78, 3, 19, 1];

numeros.sort((a, b) => a - b);

console.log(numeros10);


// Ejercicio 11
const numeros11 = [45, 12, 78, 3, 19, 1];

numeros.sort((a, b) => b - a);

console.log(numeros11);


// Ejercicio 12
const nombres = ["Pedro", "Ana", "Luis", "Carlos", "Marta"];

nombres.sort();

console.log(nombres);


// Ejercicio 13
const productos = [
    { nombre: "Teclado", precio: 120000 },
    { nombre: "Mouse", precio: 50000 },
    { nombre: "Monitor", precio: 800000 },
    { nombre: "USB", precio: 30000 }
];

productos.sort((a, b) => a.precio - b.precio);

console.log(productos);


// Ejercicio 14
let dia = 3;

switch (dia) {
    case 1:
        console.log("Lunes");
        break;

    case 2:
        console.log("Martes");
        break;

    case 3:
        console.log("Miércoles");
        break;

    case 4:
        console.log("Jueves");
        break;

    case 5:
        console.log("Viernes");
        break;

    case 6:
        console.log("Sábado");
        break;

    case 7:
        console.log("Domingo");
        break;

    default:
        console.log("Día no válido");
}


// Ejercicio 15
let color = "rojo";

switch (color) {
    case "rojo":
        console.log("Color de alerta");
        break;

    case "verde":
        console.log("Color de avance");
        break;

    case "amarillo":
        console.log("Color de precaución");
        break;

    default:
        console.log("Color no reconocido");
}


// Ejercicio 16
let i16 = 1;

while (i <= 10) {
    console.log("5 x " + i + " = " + (5 * i));
    i++;
}


// Ejercicio 17
let i17 = 10;

while (i >= 1) {
    console.log(i);
    i--;
}

console.log("¡Despegue!");


// Ejercicio 18
let suma = 0;
let numero = 1;
let contador = 0;

while (suma < 100) {
    suma += numero;
    console.log("Número agregado:", numero);

    numero++;
    contador++;
}

console.log("Suma final:", suma);
console.log("Cantidad de números:", contador);


// Ejercicio 19
const numeros = [3, 8, 15, 20, 7, 12, 1, 30];

const resultado = numeros
    .filter(num => num > 10)
    .map(num => num * 2);

console.log(resultado); // [30, 40, 24, 60]


// Ejercicio 20
const ventas = [
    { producto: "Mouse", cantidad: 3, precio: 50000 },
    { producto: "Teclado", cantidad: 2, precio: 120000 },
    { producto: "Monitor", cantidad: 1, precio: 800000 },
    { producto: "USB", cantidad: 5, precio: 30000 }
];

// 1 Filtrar productos con cantidad >=2
const filtrados = ventas.filter(v => v.cantidad >= 2);

// 2 Ordenar por precio de mayor a menor
filtrados.sort((a, b) => b.precio - a.precio);

// 3 Crear frases
const frases = filtrados.map(v =>
    `${v.producto} - Total: ${v.cantidad * v.precio}`
);

console.log(frases);

// 4 Total de ventas
const total = ventas.reduce((acum, v) => acum + (v.cantidad * v.precio), 0);

console.log("Total ventas:", total);


