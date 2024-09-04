import { useCharacters } from "../hooks/useCharacters"
import { ContenedorCharacters } from "./ContenedorCharacters"
import { BuscarCharacter } from "./BuscarCharacter"

export const MarvelApp = () => {

    const {characters, formatImageUrl, buscarCharacter, siguientePagina, anteriorPagina} = useCharacters()

    return (
        <>
            <BuscarCharacter buscarCharacter={buscarCharacter}/>
            <ContenedorCharacters characters={characters} formatImageUrl={formatImageUrl} siguientePagina={siguientePagina} anteriorPagina={anteriorPagina}/>
        </>
    )
}
