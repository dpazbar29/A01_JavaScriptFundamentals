let edad = parseInt(prompt("¿Cuál es tu edad?"));


if (edad >= 18) {
    if (edad <= 25) {
        alert("Eres un joven adulto (18-25 años).");
    } else {
        alert("Eres mayor de edad.");
    }
} else {
    alert("Eres menor de edad.");
}