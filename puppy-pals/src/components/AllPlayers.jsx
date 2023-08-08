import { useState, useEffect } from 'react';
import { fetchPlayers } from './API';

function AllPlayers() {
const [players, setPlayers] = useState([]);

  useEffect(() => {
    const getPlayers = async () => {
      try {
      const playersFromApi = await fetchPlayers()
      setPlayers(playersFromApi.data.players || []);
    } catch (error) {
      console.error('Error fetching players:', error);
    }
  };

    getPlayers();
  }, []);

  
  return (
    <div className="player-card-container">
      {players.map((player) => (
        <div key={player.id} className="player-card">
          <h4>{player.name}</h4>
          <p>Breed: {player.breed}</p>
          <p>Status: {player.status}</p>
          <img src={player.imageUrl} alt={player.name} style={{ width: '200px' }} />
          {/* Add any other player information you want to display */}
        </div>
      ))}
    </div>
  );
}
export default AllPlayers;