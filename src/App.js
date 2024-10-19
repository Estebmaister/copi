import { useEffect, useState } from 'react';
import PokemonTable from './components/PokemonTable';
import { getPokemons } from './helpers/PokeRepo';
import PokeCard from './components/PokeCard';
import './App.css';

function App() {
  const [pokemonsList, setPokemonsList] = useState([]);

  useEffect(() => {
    const fetcher = async () => {
      const pokemonData = await getPokemons(20,10);
      setPokemonsList(pokemonData);
    }
    fetcher();
  }, []);

  return (
    <div className="App">
      <PokemonTable pokemons={pokemonsList} />
      <PokeCard pokemonName={'nidoran-f'} />
    </div>
  );
}

export default App;
