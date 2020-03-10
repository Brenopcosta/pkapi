import React , { useState } from 'react';
import axios from 'axios'
import PokemonInfo from './PokemonInfo'

export default function BuscaPokemon() {
    const [pokemonASerBuscado, setPokemonASerBuscado] = useState('')
    const [pokemonEncontrado, setPokemonEncontrado] = useState([])
    const [buscaComResultado, setBuscaComResultado] = useState(false)
    const [pokemonNaoEncontrado, setPokemonNaoEncontrado] = useState()
    const [deveRenderizar, setDeveRenderizar] = useState(false)

    
    function buscarPokemon(){
        var uriBuscaPokemon = "https://pokeapi.co/api/v2/pokemon/"
        if(pokemonASerBuscado.trim() !== '' && pokemonASerBuscado.trim() !== 'pokemon'){
            axios.get(uriBuscaPokemon + pokemonASerBuscado).then(response =>{
                setPokemonEncontrado([response.data.name,uriBuscaPokemon + pokemonASerBuscado])
                setBuscaComResultado(true)
                setDeveRenderizar(false)
                }).catch(error =>{setBuscaComResultado(false)
                                  setPokemonNaoEncontrado(pokemonASerBuscado)
                                  setDeveRenderizar(true)
                })            
        }
    }
    
    return (
        <div>
            <div class = "areaBusca">
                <input class ='imputBusca'  placeholder="Busque um Pokemon" onChange={event => setPokemonASerBuscado(event.target.value)} />
                <button class = "botaoPaginacao" onClick = {buscarPokemon} >Buscar</button>
            </div>
            <div class = "retornoBusca">
                {buscaComResultado && <PokemonInfo pokemon={pokemonEncontrado}/>}
                {!buscaComResultado &&  deveRenderizar &&
                    <div class="alert">
                        <strong>Aviso!</strong> Nenhum pokémon com o nome {pokemonNaoEncontrado} foi encontrado.
                    </div>
                }
            </div>
        </div>
    )
}
