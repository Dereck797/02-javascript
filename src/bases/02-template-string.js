const nombre = 'Dereck';
const apellido = 'Muñoz';

//Ambos ejemplos cumplen la misma función
// const nombreCompleto = nombre + ' ' + apellido; 
//estos caracteres se llaman backticks. Se pueden agregar saltos de linea y expresiones propiamente de JavaScript
const nombreCompleto = ` 
${nombre} 
${apellido} 
${1 + 1}
` 

console.log(nombreCompleto);


//Cuando no se inicializa ningún valor retorna undefined. 
//Cuando una función no retorna nada también retorna undefined.
function getSaludo(nombre){
    return `Hola ${nombre}`;
}

console.log(`Este es un texto : ${getSaludo(nombre)} `);