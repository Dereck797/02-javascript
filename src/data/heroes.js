// clase 20.Import, export y funciones comunes de arreglos
// para que este objeto pueda ser llamado desde cualquier otra clase es necesario definirlo como un export
// se puede hacer una exportación por defecto de la siguiente manera (se comenta la lína del código anterior)
// export const heroes = [

// este tipo de exportación quiere decir que se está exportando este objeto por defecto
// export default [

const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];
s
//3 )
// export const owners = ['DC', 'Marvel']

// // esta es otra manera para poder realizar exportaciones por defecto
// export default heroes;

////////
//De esta manera se exportan todas las const
const owners = ['DC', 'Marvel']

export {
    heroes,
    owners
}
