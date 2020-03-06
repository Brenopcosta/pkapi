import React , { useState } from 'react';
import PokemonInfo from './PokemonInfo'
import '../App.css'

export default function ListaPokemons({ listaPokemons }) {
    return (
        <div> 
            {listaPokemons.map(pokemon => (
            <div>    
                <PokemonInfo pokemon = {pokemon}/>
            </div>
            ))}  
        </div>
    )
}
