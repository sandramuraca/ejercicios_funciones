/*
FPS son cuadros por segundo (frames per second). Definí una una función calcularFPS que reciba como argumentos una cantidad de cuadros por segundo y una cantidad de minutos, y devuelva cuántos cuadros hubo en esa cantidad de minutos

 calcularFPS(1, 1)
60
 calcularFPS(10, 2)
1200
 calcularFPS(2, 3)
360
*/

const calcularFPS = (cuadrosPorSegundo, minutos) =>{
    return (minutos*60)*cuadrosPorSegundo
}

const resultado1 = calcularFPS(1, 1)
console.log(resultado1)

const resultado2 = calcularFPS(10, 2)
console.log(resultado2)

const resultado3 = calcularFPS(2, 3)
console.log(resultado3)