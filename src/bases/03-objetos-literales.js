//Objetos literales, estos trabajan con pares de valores y contienen todas las propiedades de un objeto. si en la consola aparece "{}" eso quiere decir que el objeto es un objeto literal
const persona = {
    nombre:'Dereck',
    apellido:'Muñoz',
    edad: 45,
    direccion: {
        ciudad:'Bogotá',
        zip:3242034832,
        lat:14.123123,
        lng:34.4234234,
    }
}

const persona2 = persona;

persona2.nombre = 'Otro Dereck';

// console.table( persona );  

// Este es un ejercicio que representa algo llamado referencia de objeto
// Al yo modificar el objeto persona2 estoy modificando la referencia del objeto persona( Esto porque se encuentra en memoria)
// En el estandar de EcmaScript 6 se definio un operador para crear un clon sin pasar la referencia de un objeto a otro este operador son tres puntos ...objeto

console.log( persona );
console.log( persona2 );

const persona3 = {
    nombre:'Dereck',
    apellido:'Muñoz',
    edad: 45,
    direccion: {
        ciudad:'Bogotá',
        zip:3242034832,
        lat:14.123123,
        lng:34.4234234,
    }
}

const persona4 = { ...persona3 }

persona4.nombre = 'Dereck Sebastián';

console.log(persona3);
console.log(persona4);