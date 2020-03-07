import React , { useState } from 'react';
import PokemonInfo from './PokemonInfo'
import '../App.css'

export default function ListaPokemons({ listaPokemons }) {
    return (
        <div id = "listaPokemons"> 
            {listaPokemons.map(pokemon => (
            <div>    
                <PokemonInfo key = {pokemon[0]} pokemon = {pokemon}/>
            </div>
            ))}  
        </div>
    )
}
