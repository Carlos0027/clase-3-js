/*Hacer un script que pida un número y calcule su factorial (El factorial de un número es el
producto de todos los enteros entre 1 y el propio número y se representa por el número seguido
de un signo de exclamación. Por ejemplo 5! = 1x2x3x4x5=120)*/

console.log("Ejercicio 10 factorial");
let numero = parseInt(prompt("Ingrese un número entero:"));
let factorial = 1; // inicializamos la variable factorial en 1
if (numero >= 0) { // si el número es mayor o igual a 0
    for (let i = 1; i <= numero; i++) { // el i es el contador que se incrementa en 1 cada vez que se repite el ciclo
        factorial *= i; // multiplicamos el factorial por el número
    }
    console.log("El factorial de " + numero + " es: " + factorial); // imprimimos el resultado
}
else {
    console.log("El número ingresado no es un número entero positivo"); // si el número no es mayor o igual a 0
}
// el i++ incrementa el valor de i en 1
// el i es el contador que se incrementa en 1 cada vez que se repite el ciclo
// el i es el número de veces que se repite la frase