const restarPorcentaje = (numero, porcentaje) =>{
    const calculo = (numero * porcentaje)/100
    return (numero-calculo)
}

const suma1 = restarPorcentaje(100, 15)
console.log(suma1)

const suma2 = restarPorcentaje(10, 40)
console.log(suma2)

const suma3 = restarPorcentaje(200, 10)
console.log(suma3)