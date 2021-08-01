/*
Definí una función calcularPerimetroRectangulo que reciba como argumentos el ancho y el alto de un rectángulo y devuelva su perímetro

 calcularPerimetroRectangulo(3.2, 5)
16.4
 calcularPerimetroRectangulo(10, 20)
60
*/

const calcularPerimetroRectangulo = (ancho, alto) =>{
    return (ancho + alto)*2

}

const perimetro1 = calcularPerimetroRectangulo(3.2, 5)
console.log(perimetro1)
const perimetro2 = calcularPerimetroRectangulo(10, 20)
console.log(perimetro2)