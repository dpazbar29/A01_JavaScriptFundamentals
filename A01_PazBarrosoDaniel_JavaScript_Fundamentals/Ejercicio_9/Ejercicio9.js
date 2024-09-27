let edad = parseInt(prompt("¿Cuál es tu edad?"));

let nacionalidad = prompt("¿Cuál es tu nacionalidad?");

if (edad >= 18) {
    if (nacionalidad.toLowerCase() === "española") {
        alert("Puedes votar.");
    } else {
        alert("No puedes votar.");
    }
} else {
    alert("No puedes votar.");
}