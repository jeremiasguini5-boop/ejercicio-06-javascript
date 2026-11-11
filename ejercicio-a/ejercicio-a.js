var cantidadDeGatos = 10;

console.log("Ejercicio A");

for (var i = 1; i <= cantidadDeGatos; i++) {

    if (i % 3 == 1) {
        console.log("Gato #" + i + ": 😺");
    }
    else if (i % 3 == 2) {
        console.log("Gato #" + i + ": 😸");
    }
    else {
        console.log("Gato #" + i + ": 😹");
    }

}