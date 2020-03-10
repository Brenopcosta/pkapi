import React , { useState } from 'react';
import axios from 'axios'
import PokemonInfo from './PokemonInfo'

export default function BuscaPokemon() {
    const [pokemonASerBuscado, setPokemonASerBuscado] = useState('')
    const [pokemonEncontrado, setPokemonEncontrado] = useState([])
    const [buscaComResultado, setBuscaComResultado] = useState(false)
    const [pokemonNaoEncontrado, setPokemonNaoEncontrado] = useState()
    const [deveRenderizarAlerta, setDeveRenderizarAlerta] = useState(false)
    const [deveRenderizarPokeinfo , setDeveRenderizarPokeinfo ] = useState(false)
    
    function buscarPokemon(event){
        event.preventDefault();
        setDeveRenderizarPokeinfo(false)
        var uriBuscaPokemon = "https://pokeapi.co/api/v2/pokemon/"
        if(pokemonASerBuscado.trim() !== '' && pokemonASerBuscado.trim() !== 'pokemon'){
            axios.get(uriBuscaPokemon + pokemonASerBuscado).then(response =>{
                setPokemonEncontrado([response.data.name,uriBuscaPokemon + pokemonASerBuscado])
                setBuscaComResultado(true)
                setDeveRenderizarAlerta(false)
                setDeveRenderizarPokeinfo(true)
                }).catch(error =>{setBuscaComResultado(false)
                                  setPokemonNaoEncontrado(pokemonASerBuscado)
                                  setDeveRenderizarAlerta(true)
                })            
        }
    }

    function escondeAvisoAlerta(){
        setDeveRenderizarAlerta(false);
    }
    
    return (
        <div>
            <div class = "areaBusca">
            
                <form onSubmit = {buscarPokemon}  >
                    <input class = 'imputBusca'  placeholder="Busque um Pokemon" onChange={event => setPokemonASerBuscado(event.target.value)} />
                    <button class = "botaoPaginacao" onClick = {buscarPokemon} >Buscar</button>
                </form>

            
            </div>

            
            <div class = "retornoBusca">
                {buscaComResultado && deveRenderizarPokeinfo && <div><div class = "resultadoDaBusca">Seu Pokémon foi encontrado!!</div><PokemonInfo pokemon={pokemonEncontrado} /></div>}
                {!buscaComResultado &&  deveRenderizarAlerta &&
                    <div class="alert">
                        <span class="closebtn" onClick={escondeAvisoAlerta}  >&times;</span>
                        <strong>Aviso!</strong> Nenhum pokémon com o nome {pokemonNaoEncontrado} foi encontrado.
                    </div>
                }
            </div>
        </div>
    )
}
