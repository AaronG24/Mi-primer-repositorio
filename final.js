//Crear una funcion llamada calcular que reciba tres parametros
//El primer parametro sera una variable que tomara el tipo de operacion
//El segundo parametro sera un numero, y el tercero otro numero

function calcular(operacion, numUno, numDos) {
    if (operacion == 'suma') {
        return numUno + numDos;
    } else if (operacion == 'resta') {
        return numUno - numDos;
    } else if (operacion == 'multiplicacion') {
        return numUno * numDos;
    } else if (operacion == 'division') {
        return numUno / numDos
    } else
        return 'Algun dato es invalido'
}

console.log(calcular('suma', 4, 4));
