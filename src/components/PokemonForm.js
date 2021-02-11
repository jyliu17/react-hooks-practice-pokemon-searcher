import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onAddPokemon}) {


  const [name, setName] = useState("")
  const [hp, setHp] = useState("")
  const [frontUrl, setFrontUrl] = useState("")
  const [backUrl, setBackUrl] = useState("")

  function handleSubmit(event) {
    event.preventDefault()
    const newPokemon = {
      name,
      hp,
      sprites: {
        frontUrl,
        backUrl
    },
  }
  fetch("http://localhost:3001/pokemon", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPokemon),
  })
    .then((r) => r.json())
    .then(actualNewPokemon => {
      onAddPokemon(actualNewPokemon)
    });
}
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" 
                      placeholder="Name" 
                      name="name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}/>
          <Form.Input fluid label="hp"
                      placeholder="hp" 
                      name="hp" 
                      value={hp}
                      onChange={(e) => setHp(e.target.value)}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={frontUrl}
            onChange={(e) => setFrontUrl(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={backUrl}
            onChange={(e) => setBackUrl(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
