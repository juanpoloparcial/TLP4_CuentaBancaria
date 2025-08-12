" - Punto 3"
String.prototype.concatenarPalabra = function(palabra) {
    return `${this} ${palabra}`;
};


const saludo = "Buenos días, ";
console.log(saludo.concatenarPalabra("Juancho")); 


