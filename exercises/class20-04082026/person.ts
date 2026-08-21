export class Persona {
    nombre: string;
    apellido: string;
    edad: number;

    constructor(nombre: string, apellido: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    saludar(): void {
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`);
    }
}