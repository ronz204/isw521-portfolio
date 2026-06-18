const v8 = require('v8');
const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

console.log("Hola");

if (true) {
  var edad = 25;
}

if (true) {
  let puntos = 100;
  console.log(puntos);
}

const miVariable = {
  nombre: "Juan",
  version: 2026
};

const tamaño = v8.serialize(miVariable).length;
console.log(`El tamaño de la variable es: ${tamaño} bytes`);

const rl = readline.createInterface({ input, output });

async function main() {
  const nombre = await rl.question('Digite su nombre: ');
  if (validardatos(nombre)) {
    console.log(`El nombre digitado es: ${nombre}!`);
  } else {
    console.log("El nombre digitado no es válido. Por favor, ingrese solo letras.");
  }
  rl.close();
}

function validardatos(nombre) {
  const expresion = /^[a-zA-Z]+$/;
  const nombreValido = expresion.test(nombre);
  if (nombreValido) {
    return true;
  } else {
    return false;
  }
}

main();