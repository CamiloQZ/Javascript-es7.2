console.log("Ejercicios de Map")

console.log("Ejercicio 1")
const numeros1 = [1, 2, 3, 4, 5];

const triples = numeros1.map(num => num * 3);

console.log(triples); // [3, 6, 9, 12, 15]

console.log("Ejercicio 2")
const nombres1 = ["juan", "maria", "pedro"];

const mayusculas = nombre.map(nombre => nombre.toUpperCase());

console.log(mayusculas); // ["JUAN", "MARIA", "PEDRO"]

console.log("Ejercicio 3")
const personas1 = [
  { nombre: "Ana", edad: 20 },
  { nombre: "Luis", edad: 30 }
];

const edades = personas.map(persona => persona.edad);

console.log(edades);    

console.log("Ejercicio 4")
const producto = ["Laptop", "Mouse", "Teclado"];

const lista = productos.map(prod => `Producto: ${prod}`);

console.log(lista);

console.log("Ejercicio 5")
const numeros2 = [10, 20, 30];

const strings = numeros2.map(num => num.toString());

console.log(strings)

console.log("Ejercicios de filter")

console.log("Ejercicio 1")

const número = [5, 12, 8, 20, 3];

const mayores = número.filter(num => num > 10);

console.log(mayores); // [12, 20]

console.log("Ejercicio 2")

const números2 = [1, 2, 3, 4, 5, 6];

const pares = números.filter(num => num % 2 === 0);

console.log(pares);

console.log("Ejercicio 3")

const personas = [
  { nombre: "Carlos", edad: 17 },
  { nombre: "Laura", edad: 22 }
];

const adultos = personas.filter(persona => persona.edad >= 18);

console.log(adultos);

console.log("Ejercicio 4")

const palabras = ["sol", "javascript", "html", "programacion"];

const largas = palabras.filter(p => p.length > 5);

console.log(largas);

console.log("Ejercicio 5")

const productos = [
  { nombre: "Laptop", precio: 800 },
  { nombre: "Mouse", precio: 25 }
];

const caros = productos.filter(p => p.precio > 100);

console.log(caros);


console.log("Ejercicios de reduce")

console.log("Ejercicio 1")

const números3 = [1, 2, 3, 4];

const suma = números.reduce((acc, num) => acc + num, 0);

console.log(suma); // 10

console.log("Ejercicio 2")

const números4 = [2, 3, 4];

const multiplicacion = números4.reduce((acc, num) => acc * num, 1);

console.log(multiplicacion);

console.log("Ejercicio 3")

const nombres = ["Ana", "Luis", "Ana", "Pedro", "Luis"];

const conteo = nombres.reduce((acc, nombre) => {
  acc[nombre] = (acc[nombre] || 0) + 1;
  return acc;
}, {});

console.log(conteo);
console.log("Ejercicio 4")

const números = [10, 45, 3, 99, 23];

const mayor = números.reduce((acc, num) => 
  num > acc ? num : acc
);

console.log(mayor);

console.log("Ejercicio 5")

const carrito = [
  { producto: "Laptop", precio: 800 },
  { producto: "Mouse", precio: 25 }
];

const total = carrito.reduce((acc, item) => acc + item.precio, 0);

console.log(total);


