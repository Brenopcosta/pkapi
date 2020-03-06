import React , { useState , useEffect} from 'react';
import Header from './Components/Header'
import Paginacao from './Components/Paginacao'
import ListaPokemons from './Components/ListaPokemons'
import axios from 'axios'

function App() {
  const [pokemons , setPokemons] = useState([])
  const [paginaAtual, setPaginaAtual] = useState("https://pokeapi.co/api/v2/pokemon")
  const [proximaPagina, setProximaPagina] = useState()
  const [paginaAnterior, setPaginaAnterior] = useState()

  useEffect(() => {
    let cancelar
    axios.get(paginaAtual , {cancelToken : new axios.CancelToken(c => cancelar = c)})
    .then(response =>{
      setPokemons(response.data.results.map(pokemon => [pokemon.name,pokemon.url]))
      setProximaPagina(response.data.next)
      setPaginaAnterior(response.data.previous)
    }) 
    return () => cancelar()
  },[paginaAtual])  

  function avancarPagina(){
    setPaginaAtual(proximaPagina)
  }

  function voltarPagina(){
    setPaginaAtual(paginaAnterior)    
  }

  return (
    <>
      <Header/>
      <ListaPokemons listaPokemons = {pokemons} />
      <Paginacao 
      nextPage = {proximaPagina ? avancarPagina:null } 
      prevPage = {paginaAnterior ? voltarPagina:null} 
      />
    </>
  );
}

export default App;
