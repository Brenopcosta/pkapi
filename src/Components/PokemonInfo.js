import React , { useState } from 'react';
import '../App.css'
import axios from 'axios'

export default function PokemonInfo({pokemon}) {
    const [mostrandoDados , setMostrandoDados] = useState(false)
    const [sprite , setSprite]=useState()
    const [pokeDexNumber , setPokeDexNumber]=useState()
    const [type , setType]=useState([])
    const [height , setHeight]=useState()
    const [weight , setWeight]=useState()


    function getInfoAndtoggle (){
        if(!mostrandoDados){
            axios.get(pokemon[1]).then( response =>{
                setSprite(response.data.sprites.front_default)
                setPokeDexNumber(response.data.id)
                setType(response.data.types.map(type=>[type.type.name]))
                setHeight(response.data.height)
                setWeight(response.data.weight)
            })
        }
        setMostrandoDados(!mostrandoDados)
    }

    return (
    <div class="pokemon" >  
        <div onClick={getInfoAndtoggle}>  {pokemon[0]}</div>
        {mostrandoDados && 
            <div class="pokeInfo">
            <span class="pokeSprite">
                <img src={sprite}/>
            </span>
            <span>
                <div>Pokedex Number: {pokeDexNumber}</div>
                <div>
                Tipo do Pokemon:{type.map(tipo => <div>{tipo}</div>)}                                   
                </div>
                <div>height: {height}ft</div>
                <div>Weight: {weight}g </div>  
            </span>
        </div>
         }
    </div> 
    )
}
