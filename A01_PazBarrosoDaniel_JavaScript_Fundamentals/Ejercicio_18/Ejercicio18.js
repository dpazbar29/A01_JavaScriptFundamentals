let numero = prompt("Introduce un número entero de varios dígitos:");

// Validar que la entrada sea un número entero
while (isNaN(numero) || numero.trim() === "" || !Number.isInteger(parseFloat(numero))) {
    numero = prompt("Error: Por favor introduce un número entero válido:");
}

let suma = 0;

for (let i = 0; i < numero.length; i++) {
    if (numero[i] !== "-") {
        suma += parseInt(numero[i]);
    }
}

alert("La suma de los dígitos del número " + numero + " es: " + suma);