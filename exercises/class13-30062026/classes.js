export class Animal {
  constructor(nombre, especie) {
    this.nombre = nombre;
    this.especie = especie;
  }
}

export class Perro extends Animal {
  constructor(nombre, raza, especie, eadd) {
    super(nombre, especie);
    this.raza = raza;
    this.eadd = eadd;
  }

  ladrar() {
    console.log(`El perro llamado ${this.nombre} está ladrando`);
  }

  comer() {
    console.log(`El perro llamado ${this.nombre} está comiendo`);
  }
}


class CuentaBancaria {
  constructor(saldoInicial) {
    this.saldo = saldoInicial;
  }
  get saldo() {
    return this._saldo;
  }
  set saldo(valor) {
    if (valor < 0) {
      throw new Error("El saldo no puede ser negativo");
    }
    this._saldo = valor;
  }
}

const cuenta = new CuentaBancaria(1000);
cuenta.saldo = 1500;
console.log(cuenta.saldo);
