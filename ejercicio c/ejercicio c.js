var cantidadDeGatos = 10;
var cantidadDePasos = 4;

console.log("Ejercicio C");

for (var i = 1; i <= cantidadDeGatos; i++) {

    var pasos = "";

    for (var j = 1; j <= cantidadDePasos; j++) {
        pasos = pasos + "🐾";
    }

    if (i % 2 == 1) {
        console.log("Gato #" + i + ": 🐈 " + pasos);
    }
    else {
        console.log("Gato #" + i + ": 🐈‍⬛ " + pasos);
    }

}