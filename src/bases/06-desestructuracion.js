// Desestructuración
// Asignación Desestructurante

const persona = {
    nombre: 'Dereck',
    edad: 45,
    clave:'IronMan',
};

//La asignación Desestructurante consiste en asignar a una nueva variable de tipo persona.nombre
// el valor correspondiente
const {nombre} = persona;
// en el siguiente ejemplo solamente estoy desestructurando el objeto persona en un objeto edad
const {edad} = persona;

console.log(nombre);
console.log(edad);
console.log(persona.clave);

// A continuación otro uso de la desestructuración 
// se puede hacer de la siguiente manera
const retornaPersona = ( usuario ) => {
    const {nombre, edad, clave} = persona;
    console.log(edad, nombre, clave);
}

retornaPersona(persona)

// O tambipen de esta otra manera

const retornaPersona1 = ( { edad, nombre, clave,} ) => {console.log(edad, nombre, clave,);}

retornaPersona1(persona);

// algo que también es interesante es que se pueden asignar valores por defecto
// En este caso Rango no viene en el objeto persona pero se le puede definir un nuevo valor por defecto
// Realizando una asignación
// Si la propiedad ya exsite en el objeto entonces se toma el valor que venga en el objeto, sobre el valor que ya se tenga definido por defecto
const retornaPersona2 = ( { edad, nombre, clave, rango='Capitan',} ) => {console.log(edad, nombre, clave,rango,);}

retornaPersona2(persona);


const contextUse = ( { edad, nombre, clave, rango='Capitan',} ) => {
    return {
        nombreClave: clave,
        anios:edad,
        latlng:{
            lat: 14.44334,
            lng: -12.4332
        }
    }
}

const {nombreClave,anios,latlng:{lat,lng}} = contextUse(persona);
console.log(nombreClave,anios,lat,lng);