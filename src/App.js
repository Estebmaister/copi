import { useEffect, useState } from 'react';
import PokemonTable from './components/PokemonTable';
import { fetchPokemons } from './helpers/PokeRepo';
import './App.css';

function App() {
  const [pokemonsList, setPokemonsList] = useState([]);

  useEffect(() => {
    const fetcher = async () => {
      const pokemonData = await fetchPokemons();
      setPokemonsList(pokemonData);
    }
    fetcher();
  }, []);

  console.log(pokemonsList)
  return (
    <div className="App">
      <PokemonTable pokemons={pokemonsList} />
    </div>
  );
}

export default App;
