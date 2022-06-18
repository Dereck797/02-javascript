// import { heroes } from './data/heroes';
//snipets 
// Escribir la plabra heroes y tecla tab
// Para utilizar una importanción por defecto solo hace falta eliminar las llaves
// También se pueden utilizar otras constantes del mismo archivo que no sean default encerrando 
// la importación del objeto entre llaves {}
// 3) import heroes, {owners}  from './data/heroes';
import {heroes,owners}  from '../data/heroes';
// console.log(heroes);

export const getHeroeById = (id) => heroes.find(heroe => heroe.id === id);

// console.log(getHeroeById(4));

// Ejemplo con Filter
export const getHeroesMyOwner = ( owner ) => heroes.filter(heroe => heroe.owner === owner);

// console.log(getHeroesMyOwner('DC'));

