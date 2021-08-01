/*
Definí una función calcularPorcentaje que tome por parámetros un número y un porcentaje y devuelva el valor del porcentaje correspondiente al número

calcularPorcentaje(100, 15)
15
 calcularPorcentaje(10, 50)
5
 calcularPorcentaje(200, 10)
20
 */

const calcularPorcentaje = (numero, porcentaje) =>{
    return (numero * porcentaje)/100
}

const porcentaje1 = calcularPorcentaje(100, 15)
console.log(porcentaje1)

const porcentaje2 = calcularPorcentaje(10, 50)
console.log(porcentaje2)

const porcentaje3 = calcularPorcentaje(200, 10)
console.log(porcentaje3)