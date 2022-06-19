// const getImagePromesa = () => 
//     new Promise((resolve) => resolve('https://asdsfasdf.com'))

// getImagePromesa().then(console.log);

// la palabra reservada convierte una funcion sincrona en una promes
// lo que está a continuación es lo mismo que el ejercicio de arriba, solo que mucho mas simplificado
// const getImage = async() => 'https://asdsfasdf.com';
// El await nos ayuda a trabajar nuestro código como si este fuera sincrono

const getImage = async(resolve) => {
    // Para poder manejar control de errores dentro de funciones asymc y await es necesario el try catch
    try {
        const apiKey = '1v2hqYCBZLFq6mJAq7uVIcPZ1tkgU942';
    // el await nos convierte la promesa en una respuesta sincrona y hasta que no reciba una respuesta no ejecutará la siguiente línea de código
    // la única condición para poder trabajar con await es trabajarlos dentro de una función async
    const resp =  await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const data =  await resp.json();
    return data;
        
    } catch (error) {
        //manejo del error
        console.log(error);
    }
}

getImage()
    .then(({ data }) => {
        const {original:{url}} = data.images;
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
    })


