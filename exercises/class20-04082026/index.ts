console.log("Hello, World!");

let nombre: string = "Juan";
let apellido: string = "Pérez";

function saludar(nombre: string): void {
    console.log(`Hola, ${nombre}`);
}

function suma(a:number, b:number): number {
    return a + b;
}

function sumaDos(a:number, b:number){
    return a + b;
}


import { Persona } from './Persona.ts';

const personaUno = new Persona("Juan", "Pérez", 30);

console.log(`Nombre: ${personaUno.nombre}`);