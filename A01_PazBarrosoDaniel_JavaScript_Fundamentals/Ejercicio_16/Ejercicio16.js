let numero; // Variable para almacenar el número introducido por el usuario

// Bucle para validar la entrada del usuario
while (true) {
    // Solicitar al usuario que introduzca un número entero
    numero = prompt("Introduce un número entero:");

    // Verificar si la entrada es un número válido
    if (!isNaN(numero) && numero.trim() !== "" && Number.isInteger(parseFloat(numero))) {
        numero = parseInt(numero); // Convertir la entrada a entero
        break; // Salir del bucle si la entrada es válida
    } else {
        // Si la entrada no es válida, mostrar un mensaje de error
        alert("Error: La entrada no es un número entero. Inténtalo de nuevo.");
    }
}

// Verificar si el número es par o impar
if (numero % 2 === 0) {
    // Si el residuo de dividir el número entre 2 es 0, es par
    alert("El número " + numero + " es par.");
} else {
    // Si no, es impar
    alert("El número " + numero + " es impar.");
}

/*
1.Entrada Válida - Número Par:

    Entrada: 4
    Salida Esperada: "El número 4 es par."
    Comportamiento: Comportamiento esperado. Mensaje mostrado correctamente.

2.Entrada Válida - Número Impar:

    Entrada: 7
    Salida Esperada: "El número 7 es impar."
    Comportamiento: Comportamiento esperado. Mensaje mostrado correctamente.

3.Entrada No Válida - Letra:

    Entrada: a
    Salida Esperada: "Error: La entrada no es un número entero. Inténtalo de nuevo."
    Comportamiento: Comportamiento esperado. Mensaje de error mostrado.

4.Entrada No Válida - Espacio:

    Entrada:
    Salida Esperada: "Error: La entrada no es un número entero. Inténtalo de nuevo."
    Comportamiento: Comportamiento esperado. Mensaje de error mostrado.

5.Entrada No Válida - Número Decimal:

    Entrada: 3.5
    Salida Esperada: "Error: La entrada no es un número entero. Inténtalo de nuevo."
    Comportamiento: Comportamiento esperado. Mensaje de error mostrado.

6.Entrada Válida - Número Negativo:

    Entrada: -2
    Salida Esperada: "El número -2 es par."
    Comportamiento: Comportamiento esperado. Mensaje mostrado correctamente.
*/