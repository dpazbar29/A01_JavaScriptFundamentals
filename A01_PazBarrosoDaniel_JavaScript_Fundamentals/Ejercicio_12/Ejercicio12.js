let contraseña;
const contraseñaCorrecta = "1234";

do {
    contraseña = prompt("Introduce la contraseña:");
} while (contraseña !== contraseñaCorrecta);

alert("¡Contraseña correcta! Acceso concedido.");