let numero;

while (true) {
    numero = prompt("Introduce un número:");

    if (!isNaN(numero) && numero !== "") {
        alert("Número válido: " + numero);
        break; // Salir del bucle si es un número válido
    } else {
        alert("Error: La entrada no es un número. Inténtalo de nuevo.");
    }
}