// Desestructuración de arreglos
// Asignación desestructurante con arreglos 


const personajes = ['Goku','Vegeta','Trunks']

// Para desestructutrar un arreglo se hace de la siguiente manera
// Debido a que un arreglo está conformado por posiciones,
// Se define en el siguiente ejemplo que se quiere desestructurar el valor de la segunda posición
const [ , p2] = personajes;

console.log(p2);


// Se define en el siguiente ejemplo que se quiere desestructurar el valor de la tercera posición
const [ , ,a1] = personajes;

console.log(a1);


const retornaArreglo = () => (['ABC', 123,]);

const [letras,numeros] = retornaArreglo();

console.log(letras,numeros);

//Tarea

const stateUse = ( valor ) => ([valor, ()=>{ console.log('Hola Mundo') }]); 

const [nombre,setNombre] = stateUse('Goku');

console.log(nombre);

setNombre();
