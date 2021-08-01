/*
Definí una función sumarPorcentaje que tome como argumentos un número y un porcentaje y devuelva la suma de dicho número con la de su porcentaje. Usar la función calcularPorcentaje para obtener el porcentaje a sumar

 sumarPorcentaje(100, 15)
115
 sumarPorcentaje(10, 50)
15
 sumarPorcentaje(200, 10)
220
 */

const sumarPorcentaje = (numero, porcentaje) =>{
    const calculo = (numero * porcentaje)/100
    return (numero+calculo)
}

const suma1 = sumarPorcentaje(100, 15)
console.log(suma1)

const suma2 = sumarPorcentaje(10, 50)
console.log(suma2)

const suma3 = sumarPorcentaje(200, 10)
console.log(suma3)