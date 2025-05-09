//solucion2
//2. Una persona puede votar en las elecciones si cumple con las siguientes condiciones:

//a. Tener mínimo 18 años de edad
//b. Tener cédula
//c. Tener inscrita la cédula
//Hacer un script que informe a una persona si puede votar o no puede votar. Recuerde que
//para poder votar debe cumplir con las 3 condiciones anteriores.


let edad = prompt("ingresa tu edad: ") //pedir la edad al usuario

let cedula = prompt("tienes cedula? (si/no): ") //preguntar si tiene cedula
let inscrita = prompt("tienes cedula inscrita? (si/no): ") //preguntar si tiene cedula inscrita
//convertir a entero
edad = parseInt(edad) //convertir a entero
//convertir a minusculas
cedula = cedula.toLowerCase() //convertir a minusculas
inscrita = inscrita.toLowerCase() //convertir a minusculas
//si la edad es mayor o igual a 18 y tiene cedula y tiene cedula inscrita
if (edad >= 18 && cedula == "si" && inscrita == "si") { //si cumple con las 3 condiciones
    document.writeln("puedes votar" + "<br>") //imprime que puede votar
}
else { //si no cumple con las 3 condiciones
    document.writeln("no puedes votar" + "<br>") //imprime que no puede votar
}
document.writeln("edad ingresada: " + edad + "<br>") //imprime la edad ingresada
document.writeln("cedula ingresada: " + cedula + "<br>") //imprime la cedula ingresada
document.writeln("cedula inscrita ingresada: " + inscrita + "<br>") //imprime la cedula inscrita ingresada

