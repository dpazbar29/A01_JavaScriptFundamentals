let contadorMayorEdad = 0;

for (let i = 1; i <= 5; i++) {
    let edad = parseInt(prompt("Introduce tu edad (intento " + i + " de 5):"));

    if (!isNaN(edad) && edad >= 0) {
        if (edad >= 18) {
            contadorMayorEdad++;
        }
    } else {
        alert("Por favor, introduce una edad válida.");
        i--;
    }
}

alert("Has introducido una edad mayor o igual a 18 en " + contadorMayorEdad + " ocasiones.");