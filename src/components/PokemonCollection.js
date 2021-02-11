import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemons, onRemovePokemon}) {

const pokemonList = pokemons.map((pokemon) => {
  
  return <PokemonCard key={pokemon.id} pokemon={pokemon} onRemovePokemon={onRemovePokemon} />
})
  return (
    <Card.Group itemsPerRow={6}> 
      {pokemonList}
    </Card.Group>
  );
}

export default PokemonCollection;
