import { useState, useEffect } from "react"
import { reqCharacters } from "../services/characters"

export const useCharacters = () => {

    const [characters, setCharacters] = useState()
    const [paginacion, setPaginacion] = useState(0);
    const [nameCharacter, setNameCharacter] = useState('');

    // indicar al useState que omita la función = hook propio de REACT (useEffect)
    useEffect(()=>{
        //codigo que interesa limitar (cantidad de recargas)
        //llamada al servicio
        reqCharacters(nameCharacter, paginacion).then((data)=>{
            setCharacters(data.results)
        })
    }, [nameCharacter, paginacion])

    const buscarCharacter = (nameCharacter) => {
        setNameCharacter(nameCharacter)
        setPaginacion(0)
    }

    const siguientePagina = () => {
        setPaginacion((antePagina) => antePagina + 20)
    }

    const anteriorPagina = () => {
        setPaginacion((antePagina) => Math.max(antePagina - 20, 0))
    }
    
    const formatImageUrl = (char) => {
        const imagePath = char.thumbnail
        const url_image = `${imagePath.path}.${imagePath.extension}`
        return url_image
    }

    //retorno del hook
    return {
        characters,
        formatImageUrl,
        buscarCharacter,
        siguientePagina,
        anteriorPagina  
    }
}