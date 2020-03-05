import React from 'react'

export default function ListaPokemons({ listaPokemons }) {
    return (
        <div> 
            {listaPokemons.map(pokemon => (
                <div key={pokemon}>{pokemon}</div>
            ))}  
        </div>
    )
}
