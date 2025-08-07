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

