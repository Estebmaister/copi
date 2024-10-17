import { useEffect, useState } from 'react';
import './App.css';

const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"

function App() {
  const [pokemonsList, setPokemonsList] = useState([]);

  const fetcher = async () => {
    fetch(URL).then((res) => res.json()).then((data) => {
      setPokemonsList(data.results);
    });
  }

  useEffect(() => {
    fetcher();
  }, []);

  console.log(pokemonsList)
  return (
    <div className="App">
      <h1>Table of pokemons</h1>
      <ul>
      {pokemonsList.map((pokemon, idx) => <li key={idx}>{JSON.stringify(pokemon)}</li>)}
      </ul>
    </div>
  );
}

export default App;
