let numero;

    while (true) {
    numero = prompt("Introduce un número entero:");

    // Filtro para solo aceptar números
    if (!isNaN(numero) && numero.trim() !== "" && Number.isInteger(parseFloat(numero))) {
        numero = parseInt(numero);
        break;
    } else {
        alert("Error: La entrada no es un número entero. Inténtalo de nuevo.");
    }
}

if (numero % 2 === 0) {
    alert("El número " + numero + " es par.");
} else {
    alert("El número " + numero + " es impar.");
}