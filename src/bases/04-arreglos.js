//Arreglos en JavaScript

// const arreglo = new Array( 100 );
// arreglo.push(1);


// A pesar del ejemplo no es recomendable utilzar el push porque el push modifica el objeto principal
const arreglo = [1,2,3,4]; // también se pueden setear valores de esta manera
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);


// aquí también podemos ver otro ejemplo de la referencia de objetos, 
// para evitar este problema utilizamos el operador spread ...arreglo
let arreglo2 = [...arreglo,5];

// el método map crea un nuevo arreglo con la definición que se realice en el callback
const arreglo3 = arreglo2.map(function(numero) {
    return numero * 2;
});

// el método map crea un nuevo arreglo con la definición que se realice en el callback
const arreglo4 = arreglo3.map(function(numero) {
    return 'Hola Mundo';
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
console.log(arreglo4);

// Mozila.mdn mejor lugar para ver documentación de JS