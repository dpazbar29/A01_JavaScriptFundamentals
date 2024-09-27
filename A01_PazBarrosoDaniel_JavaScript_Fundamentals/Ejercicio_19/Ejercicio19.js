let numero = parseInt(prompt("Introduce un número entero no negativo:"));

// Validar que la entrada sea un número entero no negativo
while (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
    numero = parseInt(prompt("Error: Por favor introduce un número entero no negativo:"));
}

let factorial = 1;

for (let i = 1; i <= numero; i++) {
    factorial *= i;
}

alert("El factorial de " + numero + " es: " + factorial);