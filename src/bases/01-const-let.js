// Variables y constantes

const nombre = 'dereck'; // las constantes son utilizadas para variables que no deben cambiar
let nombre_ = 'Dereck'; // las let se utilizan para valores que van a cambiar en el ciclo de vida del programa

let valorDado = 5;
valorDado = 4;


// importante validar porqué ya no se debe utilizar el tipo de variable var leer documentación

// importante repasar cuál es el scope de estos dos tipos de variables

if(true){
    let valorDado = 6; // este valor asignado a la variable solo va a existir dentro de la función en la que se declara
    console.log(valorDado)
}


console.log(nombre, nombre_, valorDado);
