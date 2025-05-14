/*La nueva reforma tributaria en Colombia propone recaudar un impuesto a los salarios de todos
//los colombianos de acuerdo a la siguiente tabla:

//Escribir un script que pregunte a una persona su salario mensual y muestre por pantalla el
//impuesto que debe pagar. El porcentaje se calcula del salario mensual.

Porcentaje	Salario*/
console.log("Ejercicio 5: Impuesto a pagar");
let salario = prompt("Escribe tu salario mensual: ");
let impuesto = 0;

salario = parseInt(salario);
impuesto = parseInt(impuesto);
console.log("El salario es: " + salario + " pesos");
if  (salario < 1000000) {
    console.log("tu impuesto es del 1%");
    impuesto = salario * 0.01;
    console.log("su inpuesto es: " + impuesto + " pesos");
    totap_apagar = salario + impuesto;
    console.log("El total a pagar es: " + totap_apagar + " pesos"); 
}

else if (salario >= 1000000 && salario < 2000000) {
    console.log("tu impuesto es del 3%");
    impuesto = salario * 0.03;
    console.log("su inpuesto es: " + impuesto + " pesos");
    totap_apagar = salario + impuesto;
    console.log("El total a pagar es: " + totap_apagar + " pesos");
}

else if (salario >= 2000000 && salario < 3000000) {
    console.log("tu impuesto es del 5%");
    impuesto = salario * 0.05;
    console.log("su inpuesto es: " + impuesto + " pesos");
    totap_apagar = salario + impuesto;
    console.log("El total a pagar es: " + totap_apagar + " pesos");
}

else if (salario >= 3000000 && salario < 4000000) {
    console.log("tu impuesto es del 7%");
    impuesto = salario * 0.07;
    console.log("su inpuesto es: " + impuesto + " pesos");
    totap_apagar = salario + impuesto;
    console.log("El total a pagar es: " + totap_apagar + " pesos");
}   

else if (salario >= 4000000 && salario < 10000000) {
    console.log("tu impuesto es del 10%");
    impuesto = salario * 0.1;
    console.log("su inpuesto es: " + impuesto + " pesos");
    totap_apagar = salario + impuesto;
    console.log("El total a pagar es: " + totap_apagar + " pesos");
}


    
