import { useState, useEffect } from 'react';
import { fetchPlayers } from './API';
import { Link, useNavigate } from 'react-router-dom';

function AllPlayers() {
const [players, setPlayers] = useState([]);

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

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/players/${player.ID}");
  }

  return (
    <div className="player-card-container">
      {players.map((player) => (
        <div key={player.id} className="player-card">
          <h4>{player.name}</h4>
          <p>Breed: {player.breed}</p>
          <p>Status: {player.status}</p>
          <Link to={`/players/${player.id}`}>See Details</Link>
          <img src={player.imageUrl} alt={player.name} style={{ width: '200px' }} />
          <button onClick = {handleButtonClick}>See Details2</button>
        </div>
      ))}
      
    </div>
  );
}
export default AllPlayers;