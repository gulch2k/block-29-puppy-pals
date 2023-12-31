const BASE_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-pt-web-pt-d';




export const fetchPlayers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/players`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching players:', error);
    throw error;
  }
};

export const fetchPlayer = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/players/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching player:', error);
    throw error;
  }
};

export const handleDelete = async (id,navigate) => {
  try {
    const response = await fetch(`${BASE_URL}/players/${id}`, {
      method: "DELETE"
    });
    if (response.ok) {
      navigate("/");
    } else {
      console.error("Failed to delete player:", response.statusText);
    }
  } catch (error) {
    console.error("Error deleting player:", error);
  }
};

export const createPlayer = async (player) => {
  try {
    const response = await fetch(`${BASE_URL}/players`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(player),
    });

    if (!response.ok) {
      throw new Error('Failed to create player');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating player:', error);
    throw error;
  }
};

