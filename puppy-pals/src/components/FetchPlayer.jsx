export const fetchPlayers = async () => {
  try {
    const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-pt-web-pt-d/players');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching players:', error);
    throw error;
  }
};