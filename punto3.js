" - Punto 3"
String.prototype.concatenarPalabra = function(palabra) {
    return `${this} ${palabra}`;
};


const saludo = "Hola";
console.log(saludo.concatenarPalabra("Juancho")); 


