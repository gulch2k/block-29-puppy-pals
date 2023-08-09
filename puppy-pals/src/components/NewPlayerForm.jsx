import React, { useState } from "react";

const NewPlayerForm = () => {
    const [breed, setBreed] = useState("");
    const [name, setName] = useState("");
    const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to the API to create a new player
    fetch('https://fsa-puppy-bowl.herokuapp.com/api/players', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(),
    })
      .then(response => response.json())
      .then(data => {
        console.log('New player created:', data);
        // Reset the form fields
        setName('');
        setBreed('');
        setStatus('');
        setImage('')
      });
  };

  return (
    <div>
      <h2>Create New Player</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Breed:
          <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)} />
        </label>
        <label>
          Status:
          <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
        </label>
        <button type="submit">Create Player</button>
      </form>
    </div>
  );
};

export default NewPlayerForm;