/*Definí una función convertirHorasEnSegundos que reciba como argumento un número de horas y devuelva la conversión a segundos de dicha cantidad de horas*/

const convertirHorasEnSegundos = (horas) =>{
    return (horas * 3600);
}

const hora1 = convertirHorasEnSegundos(1);
console.log(hora1);

const hora2 = convertirHorasEnSegundos(3);
console.log(hora2);

const hora3 = convertirHorasEnSegundos(4.5);
console.log(hora3);