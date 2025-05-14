/* Hacer un script que imprima las tablas de multiplicar del 5, 6 7 8 y 9.  */

console.log("Ejercicio 8 tablas de multiplicar");
for (let i = 1; i <= 15; i++) {// instructor cambie el rango de 5 a 9 por 1 a 15 para ver que hacia
    console.log("Tabla del " + i);
    for (let j = 1; j <= 10; j++) {
        console.log(i + " x " + j + " = " + (i * j));
    }
    console.log("--------------------");
}
// el i++ incrementa el valor de i en 1, y el j++ incrementa el valor de j en 1
// el i es el multiplicando y el j es el multiplicador
// el i es el número de la tabla y el j es el número por el que se multiplica
