/* Hacer un script que lea un número entero entre 1 y 20 y también debe leer una frase. Al final el
script debe imprimir la frase tantas veces el número leído. */

console.log("Ejercicio 9 tantas veces");
let numero = parseInt(prompt("Ingrese un número entero entre 1 y 20:"));
let frase = prompt("Ingrese una frase:");
if (numero >= 1 && numero <= 20) { // si el número está entre 1 y 20
    for (let i = 1; i <= numero; i++) { // el i es el contador que se incrementa en 1 cada vez que se repite el ciclo
        console.log(frase);
    }
}
else {
    console.log("El número ingresado no está entre 1 y 20");
}
// el i++ incrementa el valor de i en 1
// el i es el contador que se incrementa en 1 cada vez que se repite el ciclo
// el i es el número de veces que se repite la frase
// el i es el número de veces que se imprime la frase

// let significa que la variable es local
// let es una palabra reservada que se utiliza para declarar variables
// 