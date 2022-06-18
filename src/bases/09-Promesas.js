// Promesas
// Las promeas se crean con un argumento que es un callback
// Las promesas siempre llevan dos argumentos, uno llamado resolve que es la acción que ejecuta la promesa cuano es exitoso  el proceso

import  { getHeroeById, getHeroesMyOwner }  from "./bases/08-importaciones-exportaciones";
import { heroes } from "./data/heroes";


// const promesa = new Promise((resolve,reject) =>
// setTimeout( () => {
//         const heroe = getHeroeById(5);
//         if(heroe===undefined){
//             reject('No se pudo encontrar el heroe');    
//         }else{
//             resolve(heroe);
//         }
        
        
//     }, 2000)
// );

// promesa.then( heroe =>{
//     console.log('Heroe', heroe);
// })
// .catch( err => console.error(err) )


const getHeroeByIdAsinc  = ( id ) =>
    new Promise((resolve,reject) =>
        setTimeout( () => {
            const heroe = getHeroeById(id);
            if(heroe){
                resolve(heroe);
            }else{
                reject('No se pudo encontrar el heroe');  
            }       
        }, 2000)
);

getHeroeByIdAsinc(3)
    .then(console.log) // se puede así o como el ejemplo del catch, en este caso se manda la referencia de lo que retorna la promesa directamente a la función que se defina
    .catch( err => console.error(err)) 