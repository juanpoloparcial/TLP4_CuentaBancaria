" - PUNTO 2"

class CuentaBancariaClase {
    #saldo;

    constructor(titular, saldoInicial) {
    this.titular = titular;
    this.#saldo = saldoInicial >= 0 ? saldoInicial : 0;
    }

depositar(monto) {
    this.#saldo += monto;
    }

extraer(monto) {
    if (monto <= this.#saldo) {
        this.#saldo -= monto;
    } else {
        console.log("Fondos insuficientes");
        }
    }

get saldo() {
    return this.#saldo;
    }

set saldo(saldoNuevo) {
    if (saldoNuevo >= 0) {
        this.#saldo = saldoNuevo;
    } else {
        console.log("El importe del saldo no puede ser negativo");
        }
    }

consultarSaldo() {
    console.log(`Saldo actual: $${this.#saldo}`);
    }
}



const cuenta2 = new CuentaBancariaClase("Juancho", 15000);
cuenta2.depositar(3000);
cuenta2.extraer(1000);
cuenta2.consultarSaldo(); 
console.log(cuenta2.saldo); 
"cuenta2.saldo = -5000;" 

