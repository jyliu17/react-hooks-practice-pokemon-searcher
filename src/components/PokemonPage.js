import React,{ useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemons, setPokemons] = useState([])
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then((response) => response.json())
    .then(pokemons => {
      setPokemons(pokemons)
        })
  }, [])

  function handleAddPokemon(newPokemon){
    setPokemons([...pokemons, newPokemon])
  }

  const pokemonsToDisplay = pokemons.filter((poke) =>
  poke.name.toLowerCase().includes(search.toLowerCase())
);
  function handleRemovePokemon(id){
    const newPokemonList = pokemons.filter((pokemon) => pokemon.id !== id)
    setPokemons(newPokemonList)
  }

  
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon}/>
      <br />
      <Search onSearch={search} onSetSearch={setSearch}/>
      <br />
      <PokemonCollection pokemons={pokemonsToDisplay} onRemovePokemon={handleRemovePokemon}/>
    </Container>
  );
}

export default PokemonPage;
