import React , { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon, onRemovePokemon}) {

  const [showFront, setShowFront] = useState(true)
  
  function onHandleClick(){
    setShowFront(showFront => !showFront)
  }

  function onHandleDelete(){
    fetch(`http://localhost:3001/pokemon/${pokemon.id}`, {
      method: "DELETE",
    });
        
    onRemovePokemon(pokemon.id);
  }
  

  return (
    <Card>
      <div>
        <div className="image" onClick={onHandleClick}>
          <img src={showFront ? pokemon.sprites.front : pokemon.sprites.back } 
               alt={pokemon.name} />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
        <button onClick={onHandleDelete}>Delete</button>
      </div>
    </Card>
  );
}

export default PokemonCard;
