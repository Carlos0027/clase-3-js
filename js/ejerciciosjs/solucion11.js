/* 11. Hacer un script que lea dos números enteros y como resultado se debe calcular la suma de los
pares existentes entre los dos números y el promedio de los números impares existentes entre
los dos números. (Incluir los números leídos) */

console.log("Ejercicio 11 suma de pares y promedio de impares");
let numero1 = parseInt(prompt("Ingrese el primer número entero:"));
let numero2 = parseInt(prompt("Ingrese el segundo número entero:"));

let sumaPares = 0; 
let sumaImpares = 0; 
let contadorImpares = 0; 
let contadorPares = 0; 


let menor = Math.min(numero1, numero2); 
let mayor = Math.max(numero1, numero2); 

for (let i = menor; i <= mayor; i++) { 
    if (i % 2 == 0) { 
        sumaPares += i; 
        contadorPares++; 
    } else { 
        sumaImpares += i;  
        contadorImpares++; 
    }
}
if (contadorImpares > 0) { 
    let promedioImpares = sumaImpares / contadorImpares; 
    console.log("La suma de los números pares entre " + numero1 + " y " + numero2 + " es: " + sumaPares); 
    console.log("El promedio de los números impares entre " + numero1 + " y " + numero2 + " es: " + promedioImpares); 
}
else {
    console.log("No hay números impares entre " + numero1 + " y " + numero2); 
}


