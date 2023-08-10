import { useState, useEffect } from 'react';
import { fetchPlayers } from './API';
import { handleDelete } from './API';
import { useNavigate } from 'react-router-dom';

function AllPlayers() {
const [players, setPlayers] = useState([]);
const navigate = useNavigate();

  useEffect(() => {
    const getPlayers = async () => {
      try {
      const puppies = await fetchPlayers()
      setPlayers(puppies.data.players || []);
      console.log(puppies);
    } catch (error) {
      console.error('Error fetching players:', error);
    }
  };

    getPlayers();
  }, []);

  return (
    <div className="player-card-container">
      {players.map((player) => {
        const handleButtonClick = () => {
          navigate(`/players/${player.id}`);
        }

        return (
          <div key={player.id} className="player-card">
            <h4>{player.name}</h4>
            <p>Breed: {player.breed}</p>
            <p>Status: {player.status}</p>
            <img src={player.imageUrl} alt={player.name} style={{ width: '200px' }} />
            <button onClick={()=> handleButtonClick(player.id)}>See Details</button>
          </div>
        )
      })}
    </div>
  );
}
export default AllPlayers;