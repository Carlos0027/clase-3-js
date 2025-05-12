//solucion2
//2. Una persona puede votar en las elecciones si cumple con las siguientes condiciones:

//a. Tener mínimo 18 años de edad
//b. Tener cédula
//c. Tener inscrita la cédula
//Hacer un script que informe a una persona si puede votar o no puede votar. Recuerde que
//para poder votar debe cumplir con las 3 condiciones anteriores.

console.log("Ejercicio 2: Votación");
let edad = prompt("ingresa tu edad: ") 

let cedula = prompt("tienes cedula? (si/no): ")
let inscrita = prompt("tienes cedula inscrita? (si/no): ") 
//convertir a entero
edad = parseInt(edad) 

cedula = cedula.toLowerCase() //convertir a minusculas
inscrita = inscrita.toLowerCase() //convertir a minusculas

if (edad >= 18 && cedula == "si" && inscrita == "si") { //si cumple con las 3 condiciones
    document.writeln("puedes votar" + "<br>") 
}
else { //si no 
    document.writeln("no puedes votar" + "<br>") 
}
document.writeln("edad ingresada: " + edad + "<br>") 
document.writeln("cedula ingresada: " + cedula + "<br>") 
document.writeln("cedula inscrita ingresada: " + inscrita + "<br>") 

