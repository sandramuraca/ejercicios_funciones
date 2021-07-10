/*Definí una función calcularAreaTriangulo que tome por parámetros la base y la altura de un triángulo y devuelva el área del mismo*/

const calcularAreaTriangulo = (base, altura) =>{
    resultado = (base*altura)/2;
    return resultado;
}

const triangulo1 = calcularAreaTriangulo(3, 4);
console.log(triangulo1);

const triangulo2 = calcularAreaTriangulo(5, 6);
console.log(triangulo2);
