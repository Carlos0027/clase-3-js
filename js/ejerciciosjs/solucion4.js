//Escribir un script para una empresa que tiene salas de juegos para todas las edades y quiere
//calcular de forma automática el precio que debe cobrar a sus clientes por entrar. El programa
//debe preguntar al usuario la edad del cliente y mostrar el precio de la entrada. Si el cliente es
//menor de 5 años puede entrar gratis, si tiene entre 5 y 18 años debe pagar 5 mil pesos y si es
//mayor de 18 años debe pagar 10 mil pesos.

console.log("Ejercicio 4: Precio de entrada a sala de juegos");
let edad;
let precio;

edad = prompt("¿Cuál es tu edad? ");

edad = parseInt(edad);  

if (edad < 5) {
    precio = 0;
}
else if (edad >= 5 && edad <= 18) {
    precio = 5000;
}
else {
    precio = 10000;
}
console.log("El precio de la entrada es: " + precio + " pesos");
