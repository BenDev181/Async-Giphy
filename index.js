require('dotenv').config();

// Print out value of API key stored in .env file
const apiKey = process.env.API_KEY
console.log(apiKey)

async function getImages(query) {
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    const response = await fetch (endpoint)
    const data = await response.json()
    const imageUrl = data.data[0].url;
    console.log(imageUrl)
    return imageUrl
}
getImages("cat")