import { useState } from 'react'

export const BuscarCharacter = ({ buscarCharacter }) => {

    const [nameCharacter, setNameCharacter] = useState('')

    const handleGetMarvel = (e) => {
        e.preventDefault()
        buscarCharacter(nameCharacter)
    }

    return (
        <>
            <div className="d-flex flex-row justify-content-center alig-items-center mt-3">
                <form className="d-flex" onSubmit={(e)=>{ handleGetMarvel(e, nameCharacter) }}>
                    <input type="text" className="bg-primary text-center form-control ms-4 me-2" onChange={(e)=>{setNameCharacter(e.target.value)}}></input>
                    <input type="submit" value="Buscar" className="btn btn-outline-danger text-center"></input>
                </form>
            </div>
        </>
    )
}