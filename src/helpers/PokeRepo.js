const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const DEFAULT_LIMIT = 10;

// Returns a list of pokemons from the base URL with a variable offset
// and default limit as 10, logs an error to the console in case it fails.
export const getPokemons = async (offset = 0, limit = DEFAULT_LIMIT) => {
  let pokemons = [];
  let count = 0;
  try {
    const response = await fetch(`${BASE_URL}?limit=${limit}&offset=${offset}`);
    if (!response.ok) {
      throw new Error(`fetchPokemons response status: ${response.status}`);
    }
    const data = await response.json();
    pokemons = data.results;
    count = data.count;
  } catch (error) {
    console.warn("Error fetching Pokemons list:", error);
  }
  return {pokemons, count};
};

// Returns a dictionary with the information of a certain pokemon by name
export const getPokemonByName = async (name) => {
  let pokemon = {};
  try {
    const response = await fetch(`${BASE_URL}/${name}`);
    if (!response.ok) {
      throw new Error(`fetchPokemon (${name}) response status: ${response.status}`);
    }
    pokemon = await response.json();
  } catch (error) {
    console.error("Error fetching the Pokemon data:", error);
  }
  return {pokemon}
};

// Creates an image link from a pokemon ID
export const getImgLinkForPokemonByID = ({id}) => {
  if (!id) return '';
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}

// Creates an image link from a pokemon ID
export const getImgLinkForPokemonByName = ({name}) => {
  if (!name) return '';
  return `https://img.pokemondb.net/artwork/${name}.jpg`
}