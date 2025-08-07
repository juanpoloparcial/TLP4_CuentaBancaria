" - PUNTO 1 "

function MiCuentaBancaria(titular, saldoInicial) {
    this.titular = titular;
    this.saldo = saldoInicial;
}

MiCuentaBancaria.prototype.depositar = function(monto) {
    this.saldo += monto;
};

MiCuentaBancaria.prototype.extraer = function(monto) {
    if (monto <= this.saldo) {
        this.saldo -= monto;
    } else {
    console.log("Fondos insuficientes");
    }
};

MiCuentaBancaria.prototype.consultarSaldo = function() {
    console.log(`Saldo actual: $${this.saldo}`);
};


const cuenta1 = new MiCuentaBancaria("Juancho", 10000);
cuenta1.depositar(5000);
cuenta1.extraer(2000);
cuenta1.consultarSaldo(); 

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

" - Punto 3"
String.prototype.concatenarPalabra = function(palabra) {
    return `${this} ${palabra}`;
};


const saludo = "Hola";
console.log(saludo.concatenarPalabra("Juancho")); 


" - Punto 4 "

String.prototype.toUpperCase = function() {
    return "ESTO ESTÁ PROHIBIDO";
};

console.log("texto".toUpperCase());