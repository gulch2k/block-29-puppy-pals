import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchPlayer } from "./API";

export default function SinglePlayer() {
  const navigate = useNavigate();
  const [player, setPlayer] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchSinglePlayer = async () => {
      try {
        const playerData = await fetchPlayer(id);
        setPlayer(playerData);
      } catch (error) {
        console.error("Error fetching player:", error);
      }
    };

    fetchSinglePlayer();
  }, [id]);

  if (!player) {
    return <div>Loading...</div>;
  }

  <div>
    {player.map((player) => {
      return (
        <div>
          <h2>Player Details</h2>
          <p>Player ID: {player.id}</p>
          <p>Name: {player.name}</p>
          <p>Breed: {player.breed}</p>
          <p>Status: {player.status}</p>
          <button onClick={() => navigate("/")}>Go Home</button>
          <button className="delete-btn" onClick={() => handleClick(player.id)}>
            Don't Click me!
          </button>
        </div>
      );
    })}
  </div>;
}

//
