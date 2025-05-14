/*  Hacer un script que muestre en pantalla algo así: */

console.log("Ejercicio 12 solucion"); 


function dibujarFigura() {
    let texto = "";
    let resultado = ""
    for (let i = 1; i <= 5; i++) {
      texto += "* "
      resultado += texto + "<br>"
    }

    document.getElementById("resultado").innerHTML = resultado;
  }
