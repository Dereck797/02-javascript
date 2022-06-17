//Funciones en JavaScript, lo mas recomendable es definir las funciones como constantes
const saludar = function( nombre ) {
    return `Hola, ${nombre}`;
}

//Funciones de flecha o funciones lambda
const saludar2 = ( nombre ) => {
    return `Hola, ${nombre}`;
}

//Si el cuerpo de una función solo tiene un return como en la función anterior,
//se puede simplificar de la siguiente manera. Representa exactamente lo mismo
//solo que esta funcion es mas ligera 
const saludar3 = ( nombre ) => `Hola, ${nombre}`;

//Si la función no recibe ningún argumento se puede simplificar aún mas de las siguiente manera

const saludar4 = () => 'Hola mundo';

console.log(saludar('Goku'));
console.log(saludar2('Gohan')); 
console.log(saludar3('Vegeta'));
console.log(saludar4);

// esto no va a funcionar porque no se entiende que lo que está retornando la función es un objeto
// para poder lograr esto es necesario encerrar el objeto entre parentesis.
// es una buena práctica que para este tipo de funciones siempre se encierren los return entre parentesis.
const getUser = () => 
    ({
        uuid: 'ABC123',
        username: 'D3r3cks_122',
    });

const user = getUser();
console.log(user);  

//Tarea
// 1.Transformar a una función de flecha
// 2.Tiene que retornar un objeto implicito
// 3.Realizar pruebas

// function getUsuarioActivo(nombre) {
//     return {
//         uuid: 'ABC2323',
//         username: nombre,
//     }
// }

const getUsuarioActivo = (nombre) => ({uuid: 'ABC2323', username: nombre,})

const usuarioActivo = getUsuarioActivo('Dereck');
console.log(usuarioActivo);