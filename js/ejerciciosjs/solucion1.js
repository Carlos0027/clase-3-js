// Ejercicio 1

//1. Escribir un script que diga si un número es par o es impar. Recordemos que un número es par
//si al dividirlo por 2 da como resto 0.

let a = prompt("ingresa un numero: ") //pedir un numero al usuario
//prompt devuelve un string, por lo que hay que convertirlo a entero

num = parseInt(a) //convertir a entero
if (num % 2 == 0) { //si el resto de la division es 0
    document.writeln("el numero es par" + "<br>") //si es par
}
else { //si no es par
    document.writeln("el numero es impar" + "<br>")
}

document.writeln("numero ingresado: " + a + "<br>" ) //imprime el numero ingresado


