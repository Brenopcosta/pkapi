import React  from 'react';
import PokemonInfo from './PokemonInfo'
import '../App.css'

export default function ListaPokemons({ listaPokemons }) {
    return (
        <div id = "listaPokemons"> 
            {listaPokemons.map(pokemon => (
            <div key = {pokemon[0]}>    
                <PokemonInfo key = {pokemon[0]} pokemon = {pokemon}/>
            </div>
            ))}  
        </div>
    )
}
