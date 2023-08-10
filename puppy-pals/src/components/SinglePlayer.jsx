import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchPlayer, handleDelete } from "./API";

export default function SinglePlayer() {
  const navigate = useNavigate();
  const [player, setPlayer] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchSinglePlayer = async () => {
      try {
        const playerData = await fetchPlayer(id);
        setPlayer(playerData.data.player || []);
      } catch (error) {
        console.error("Error fetching player:", error);
      }
    };

    fetchSinglePlayer();
  }, [id]);

  if (!player) {
    return <div>Loading...</div>;
  }
  return (
    <div key={player.id} className="player-card">
      <h2>Player Details</h2>
      <img src={player.imageUrl} alt={player.name} style={{ width: "200px" }} />
      <p>Name: {player.name}</p>
      <p>Player ID: {player.id}</p>
      <p>Breed: {player.breed}</p>
      <p>Status: {player.status}</p>
      <button onClick={() => navigate("/")}>Go Home</button>
      <button className="delete-btn" onClick={() => handleDelete(player.id)}>
        Dont click me!
      </button>
    </div>
  );
}

//
