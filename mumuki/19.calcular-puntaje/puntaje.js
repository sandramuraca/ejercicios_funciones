/*
Definí una función calcularPuntaje que calcule el puntaje de un examen que consiste en ejercicios de distinto nivel. Debe recibir como argumento tres numeros que consisten en la cantidad de ejercicios resueltos en cada nivel y devolver un número con el puntaje correspondiente. El puntaje se calcula de la siguiente forma:

facil: 3 puntos
normal: 5 puntos
dificil: 10 puntos
 calcularPuntaje(3, 0, 0) 
9
 calcularPuntaje(0, 2, 1) 
20
 calcularPuntaje(5, 1, 2)
40
 */

const calcularPuntaje = (facil, normal, dificil) =>{
    return ((facil*3)+(normal*5)+(dificil*10))
}

const resultado1 = calcularPuntaje(3, 0, 0) 
console.log(resultado1)

const resultado2 = calcularPuntaje(0, 2, 1) 
console.log(resultado2)

const resultado3 = calcularPuntaje(5, 1, 2) 
console.log(resultado3)