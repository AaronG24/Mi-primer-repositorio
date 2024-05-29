let numeroUno= 60
let numeroDos = 10

let suma = numeroUno + numeroDos
let resta = numeroDos - numeroUno
let multiplicacion =  numeroUno * numeroDos
let division = numeroUno / numeroDos

if ((numeroUno == undefined || numeroUno == null) || (numeroDos == undefined || numeroDos == null))  {
    console.log('Algun dato es invalido') 
} else {
    console.log(suma)
    console.log(resta)
    console.log(multiplicacion)
    console.log(division)
}