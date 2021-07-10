/*Usando las funciones anteriores (obtenerNombreCompleto, saludar y gritar), definí una función saludarGritando que reciba como argumentos un nombre y un apellido y devuelva un saludo con signos de exclamación.*/

const saludarGritando = (nombre, apellido) =>{
    return (`¡Hola ${nombre} ${apellido}, un gusto conocerte!`);
}

saludarGritando('Ada', 'Lovelace');