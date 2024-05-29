//Declarando funcion

function saludo() {

}
//Invocando funcion
saludo()

function suma(numUno, numDos) {
    return numUno + numDos
}



//Crear una funcion esMayor, que reciba dos pàrametros
//Y utilizando un condicional. comparar cual numero es mayor.

function esMayor(numUno, numDos) {
    if (numUno > numDos)
        return numUno + ' ' +'es mayor que' + ' ' + numDos
    else
        return numUno + ' ' + 'es menor que' + ' ' + numDos
}

console.log(esMayor(450, 501))

