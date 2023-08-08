import { useState, useEffect } from 'react';
import { fetchPlayers } from './API';

function AllPlayers() {
const [players, setPlayers] = useState([]);

  useEffect(() => {
    const getPlayers = async () => {
      const playersFromApi = await fetchPlayers()
      console.log(playersFromApi);
      setPlayers(playersFromApi);
    }

    getPlayers();
  }, []);

  
  return (
    <div>
      {Array.isArray(players) && players.length > 0 ? (
        players.map((player) => {
          return (
            <div key={player.id}>
              <h4>{player.name}</h4>
              {/* Add here whatever you want to display */}
            </div>
          );
        })
      ) : (
        <p>No players available</p>
      )}
    </div>
  );
}

export default AllPlayers;