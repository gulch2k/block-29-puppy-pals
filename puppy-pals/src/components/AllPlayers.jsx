import { useState, useEffect } from 'react';
import { FetchPlayer } from './FetchPlayer';

function AllPlayers() {
    <FetchPlayer/>

  return (
    <div>
      {
        players.map((player) => {
          return (
            <div key={player.id}>
              <h4>{player.name}</h4>
              {/* Add here whatever you want to display */}
            </div>
          )
        })
      }
    </div>
  );
}

export default AllPlayers;