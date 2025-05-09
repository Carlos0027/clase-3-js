//ejemplo de switch
  switch(mes){
        case 1:
        case 3:
        case 5: 
        case 7:
        case 8:
        case 10:
        case 12:
            console.log(31)
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log(30)
            break;
        case 2:
            console.log(28)
            break;
        default:
            console.log("mes no valido")
    }

    let nota = 8
    console.log("he realizado un examen, mi resultado es el siguiente: ")

    //operador ternario: ( condicion) ? (true) : (false)
    let calificacion = (nota >= 5) ? "aprobado" : "suspenso"
    console.log("estoy", calificacion);

    

    