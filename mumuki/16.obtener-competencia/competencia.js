/*
Definí una función obtenerCompetencia que tome por parámetros dos strings a y b y devuelva un string con el formato a vs. b

 obtenerCompetencia('JavaScript', 'Python')
`JavaScript vs. Python`
 obtenerCompetencia('Coca', 'Pepsi')
`Coca vs. Pepsi`
 obtenerCompetencia('Perros', 'Gatos')
`Perros vs. Gatos`
 */

const obtenerCompetencia = (a, b) =>{
    return (` ${a} vs ${b}`)
}


const competencia1 = obtenerCompetencia('JavaScript', 'Python')
console.log(competencia1)

const competencia2 = obtenerCompetencia('Coca', 'Pepsi')
console.log(competencia2)

const competencia3 = obtenerCompetencia('Perros', 'Gatos')
console.log(competencia3)