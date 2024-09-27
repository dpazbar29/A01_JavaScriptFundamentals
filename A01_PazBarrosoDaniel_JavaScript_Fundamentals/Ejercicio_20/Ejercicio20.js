function esPalindromo(cadena) {
    // Convertir la cadena a minúsculas, eliminar espacios y caracteres especiales
    let cadenaLimpia = cadena.toLowerCase().replace(/[^a-z0-9]/g, "");

    // Invertir la cadena limpia
    let cadenaInvertida = cadenaLimpia.split("").reverse().join("");

    // Verificar si la cadena limpia es igual a la cadena invertida
    return cadenaLimpia === cadenaInvertida;
}

let textoUsuario = prompt("Introduce una frase o palabra para verificar si es un palíndromo:");

if (esPalindromo(textoUsuario)) {
    alert('"' + textoUsuario + '" es un palíndromo.');
} else {
    alert('"' + textoUsuario + '" no es un palíndromo.');
}