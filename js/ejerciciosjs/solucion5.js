//La nueva reforma tributaria en Colombia propone recaudar un impuesto a los salarios de todos
//los colombianos de acuerdo a la siguiente tabla:

//Escribir un script que pregunte a una persona su salario mensual y muestre por pantalla el
//impuesto que debe pagar. El porcentaje se calcula del salario mensual.

//Porcentaje	Salario
if( salario < 1000000) {
    console.log("No paga impuesto");
    impuesto = 0.01;
    salario = salario * impuesto;
    console.log("El impuesto es del 1%");

}
else if( salario > 1000000 && salario <= 2000000) {
    console.log("El impuesto es del 19%");
}
else if( salario > 2000000 && salario <= 3000000) {
    console.log("El impuesto es del 28%");
}
else if( salario > 3000000 && salario <= 4000000) {
    console.log("El impuesto es del 33%");
}
else if( salario > 4000000 && salario <= 5000000) {
    console.log("El impuesto es del 35%");
}