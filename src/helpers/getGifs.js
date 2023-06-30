export const getGifs = async function(category){

    const url = `http://api.giphy.com/v1/gifs/search?api_key=K1VZAFg9eOPVu0S43aV20qRnqe3YYm3a&q=${ category }&limit=10`;
    const resp = await fetch( url );
    const { data=[] } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title, 
        url: img.images.downsized_medium.url
    }) )

    // console.log(gifs);

    return gifs;
}