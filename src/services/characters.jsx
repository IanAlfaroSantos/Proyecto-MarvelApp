import CryptoJS from "crypto-js"
    
export const reqCharacters = async (nameCharacters = '', paginaciones = 0) => {
    //Marca de tiempo = TimeStamp
    const timeStamp = new Date().getTime()
    
    //fetch api marvel
    const PRIVATE_API_KEY = 'd353f949613fadf7bf6f078b994c7363c64041ae'
    const PUBLIC_API_KEY = '58bb00a12d8dfdcae9a5ba1474675c53'

    const hash = CryptoJS.MD5(timeStamp + PRIVATE_API_KEY + PUBLIC_API_KEY).toString()

    let api_url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${PUBLIC_API_KEY}&hash=${hash}&offset=${paginaciones}`

    if(nameCharacters) {
        api_url += `&nameStartWith=${nameCharacters}`
    }

    const resp = await fetch(api_url)
    const {data} = await resp.json()
    
    return data
}