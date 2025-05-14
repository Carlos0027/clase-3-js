/*Hacer un script que lea un número entero y como resultado informar si el número es primo o
no.*/
console.log("Ejercicio 7 - Solución");
let numero = parseInt(prompt("Ingrese un número entero:"));
let esPrimo = true;
if (numero <= 1) {
    esPrimo = false;
}
for (let i = 2; i <= Math.sqrt(numero); i++) {// Se optimiza el bucle para que solo itere hasta la raíz cuadrada del número
    if (numero % i === 0) {// Si el número es divisible por i
        esPrimo = false;// Si el número es divisible por i, no es primo
        break;// Si encontramos un divisor, no es primo
    }
}
if (esPrimo) {// Si es primo
    console.log("El número " + numero + " es primo.");
}
else {// Si no es
    console.log("El número " + numero + " no es primo.");
}
