import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokeTable from './components/PokeTable';
import PokeCard from './components/PokeCard';
import { getPokemons } from './helpers/PokeRepo';
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
    <Router>
      <Routes>
        <Route exact path="/" element={<PokeTable pokemons={pokemonsList} />} />
        <Route path="/pokemon/:pokemonName" element={<PokeCard />} />
      </Routes>
    </Router>
  );
};

export default App;
