var cantidadDeGatos = 5;
var cantidadDePasos = 3;

console.log("Ejercicio B");

for (var i = 1; i <= cantidadDeGatos; i++) {

    var pasos = "";

    for (var j = 1; j <= cantidadDePasos; j++) {
        pasos = pasos + "🐾";
    }

    console.log("Gato #" + i + ": 🐈 " + pasos);

}