//FORMA PARA IMPORTAR CON DESTRUCTURING
const { saludar, saludarHola } = require('./saludos.js')

console.log(saludar('MUNDO'));
console.log(saludarHola());

//FORMA PARA IMPORTAR
// const saludo = require('./saludos.js')

// console.log(saludo.saludar('Mundo'));
// console.log(saludo.saludarHola());