import React from 'react';

export const ContenedorCharacters = ({ characters, formatImageUrl, siguientePagina, anteriorPagina }) => {
    return (
        <>
            <div className="d-flex flex-row row row-cols-5">
                {
                    characters &&
                    characters.map((char) => (
                        <div key={char.id}>
                            <h5 className="text-warning m-3">{char.name}</h5>
                            <img src={formatImageUrl(char)} style={{ width: '8rem' }} className="rounded-5 rounded-top-0 border border-warning m-3" />
                        </div>
                    ))
                }
            </div>
            <div className="d-flex justify-content-between m-3">
                <button className="btn btn-warning" onClick={anteriorPagina}>Anterior</button>
                <button className="btn btn-warning" onClick={siguientePagina}>Siguiente</button>
            </div>
        </>
    );
}
