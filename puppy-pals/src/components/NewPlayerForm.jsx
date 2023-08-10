import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPlayer } from "./API";

const NewPlayerForm = () => {
  const navigate = useNavigate();
  const [player, setPlayer] = useState({
    name: "",
    breed: "",
    status: "",
    imageUrl: ""
  });

  const handleChange = (e) => {
    setPlayer({ ...player, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newPlayer = await createPlayer(player);
      console.log("New player created:", newPlayer);

      // Redirect to the home page after successful creation
      navigate("/");
    } catch (error) {
      console.error("Error creating player:", error);
    }
  };

  return (
    <div className="form-container">
      <h2>Create New Player</h2>
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Name:
          <input
            type="text"
            name="name"
            value={player.name}
            onChange={handleChange}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Breed:
          <input
            type="text"
            name="breed"
            value={player.breed}
            onChange={handleChange}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Status:
          <input
            type="text"
            name="status"
            value={player.status}
            onChange={handleChange}
            className="form-input"
          />
        </label>
        <label className="form-label">
          Image URL:
          <input
            type="text"
            name="imageUrl"
            value={player.imageUrl}
            onChange={handleChange}
            className="form-input"
          />
        </label>
        <button type="submit">Create Player</button>
      </form>
    </div>
  );
};

export default NewPlayerForm;