import { useState, useEffect } from 'react';
import { fetchPlayers } from './API';
import { Link } from 'react-router-dom';

function AllPlayers() {
const [players, setPlayers] = useState([]);

  useEffect(() => {
    const getPlayers = async () => {
      try {
      const playersFromApi = await fetchPlayers()
      setPlayers(playersFromApi.data.players || []);
      console.log(playersFromApi);
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
          <Link to={`/players/${player.id}`}>See Details</Link>
          <img src={player.imageUrl} alt={player.name} style={{ width: '200px' }} />
        </div>
      ))}
      
    </div>
  );
}
export default AllPlayers;