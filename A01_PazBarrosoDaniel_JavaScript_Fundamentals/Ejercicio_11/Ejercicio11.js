let numero;

while (true) {
    numero = parseInt(prompt("Introduce un número entero (negativo para terminar):"));
            
    // Verificar si el número es negativo
    if (numero < 0) {
        alert("Número negativo introducido. Fin del programa.");
        break; // Salir del bucle
    }
}