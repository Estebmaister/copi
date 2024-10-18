const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const DEFAULT_LIMIT = 10;

// Returns a list of pokemons from the base URL with a variable offset
// and default limit as 10, logs an error to the console in case it fails.
export const fetchPokemons = async (offset = 0, limit = DEFAULT_LIMIT) => {
  let results = [];
  try {
    const response = await fetch(`${BASE_URL}?limit=${limit}&offset=${offset}`);
    if (!response.ok) {
      throw new Error(`fetchPokemons response status: ${response.status}`);
    }
    const data = await response.json();
    results = data.results;
  } catch (error) {
    console.warn("Error fetching Pokemons list:", error);
  }
  return results
};
