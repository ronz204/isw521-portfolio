import { sumar, restar } from "./operadores.js";
import { Perro } from "./classes.js";

const persona = { nombre: "pepe", edad: 50 };
const { edad: anios = 21 } = persona;
console.log(anios);


function sumarTodo(...numeros) {
  return numeros.reduce((acum, n) => acum + n, 0);
}

console.log(sumarTodo(1, 2, 3));
console.log(sumarTodo(2, 10, 15, 20));


console.log(sumar(5, 5));
console.log(restar(5, 3));


const perroUno = new Perro("Firulais", "Mamifero", "Golden", 7);

console.log(perroUno.nombre);
console.log(perroUno.comer());