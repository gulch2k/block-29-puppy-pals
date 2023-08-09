import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchPlayer } from "./API";

export default function SinglePlayer() {
  const { playerId } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchSinglePlayer = async () => {
      try {
        const playerData = await fetchPlayer(playerId);
        setPlayer(playerData);
      } catch (error) {
        console.error('Error fetching player:', error);
      }
    };

    fetchSinglePlayer();
  }, [playerId]);

  if (!player) {
    return <div>Loading...</div>;
  }
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <div>
      <div>
        <h2>Player Details</h2>
        <p>Player ID: {playerId}</p>
      </div>
      <button onClick={handleButtonClick}>Go Home</button>
    </div>
  );
}
