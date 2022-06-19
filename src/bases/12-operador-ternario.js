const activo = true;

// let mensaje = '';

// if ( activo ) {
//     mensaje = 'Activo' ;
// } else {
//     mensaje = 'Inactivo' ;
// }

// const mensaje = ( activo ) ? 'Activo' : 'Inactivo';


// Esto a continuación es útil para realizar una función o cuando la condición se cumpla
// En este caso el asigna a mensaje la palabra inactivo debido a que activo es true
// En caso de que sea false retornará un booleano con valor false
const mensaje = activo && 'Inactivo';

console.log(mensaje)