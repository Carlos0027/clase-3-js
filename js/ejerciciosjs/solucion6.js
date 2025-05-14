/*Hacer un script que imprima los números múltiplos de 3 que hay entre dos números.

*/
console.log("Ejercicio 6: Múltiplos de 3");

let num1 = prompt("Escribe el primer número: ");
let num2 = prompt("Escribe el segundo número: ");
let num3 = parseInt(num1);
let num4 = parseInt(num2);
let num5 = Math.min(num1, num2);// minimo
let num6 = Math.max(num1, num2);// maximo

console.log(`Los múltiplos de 3 entre ${num1} y ${num2} son:`);
for (let i = num1; i <= num2; i++) {
    if (i % 3 === 0) {// si el resto de la division es 0
        console.log(i);//
    }
}
