const apiKey = '1v2hqYCBZLFq6mJAq7uVIcPZ1tkgU942';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion.then(respo => respo.json().then(console.log)).catch(console.error);

//Las promesas pueden encadenarse

peticion
.then(resp => resp.json())
.then(({ data }) => {
    const {original:{url}} = data.images;
    const img = document.createElement('img');
    img.src = url;

    document.body.append( img );
    console.log(url)
})
.catch( console.error)