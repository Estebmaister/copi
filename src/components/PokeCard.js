import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonByName } from '../helpers/PokeRepo'
import { capitalize, capitalizeWords } from '../helpers/Strings';
import { typesToBackgroundStyle } from '../helpers/PokeTypes';
import { getPokemonImgLinkByName } from '../helpers/PokeRepo';
import './PokeCard.css';

const PokeCard = () => {
  const [pokemon, setPokemon] = useState(null);
  const { pokemonName } = useParams();
  
  useEffect(() => {
    const fetcher = async () => {
      const pokemonData = await getPokemonByName(pokemonName);
      setPokemon(pokemonData);
    }
    fetcher();
  }, [pokemonName]);

  if (!pokemon) return <div className="card-loader">Loading...</div>;

  const id = pokemon.id.toString();
  const name = capitalizeWords(pokemon.name);
  const imgLink = getPokemonImgLinkByName(pokemon);
  const types = pokemon.types.map(type => type.type.name);
  const typesBackgroundStyle = typesToBackgroundStyle(types);

  return (
  <div className="card" style={typesBackgroundStyle}>
    <div className="inner-card">
      <h2>{name} (#{id})</h2>
      <img alt={name} src={imgLink} decoding="async" loading="lazy" ></img>
      <p>Type(s): {types.map(t => (
        <span key={t} style={typesToBackgroundStyle([t])} 
        className="type-span" > {capitalize(t)} </span>
      ))}</p>
      <div>
        <h3>Abilities:</h3>
        <ul>
          {pokemon.abilities.map((ability) => (
            <li key={ability.ability.name}>
              {capitalizeWords(ability.ability.name)} {ability.is_hidden ? "(Hidden)" : ""}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  );
};

export default PokeCard;