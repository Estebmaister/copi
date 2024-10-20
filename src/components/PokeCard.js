import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  getPokemonByName, 
  getImgLinkForPokemonByName, 
  getImgLinkForPokemonByID 
} from '../helpers/PokeRepo'
import { capitalize, capitalizeWords } from '../helpers/Strings';
import { typesToBackgroundStyle } from '../helpers/PokeTypes';
import './PokeCard.css';

const PokeCard = () => {
  const [pokemon, setPokemon] = useState(null);
  const [onErrorRetried, setOnErrorRetried] = useState(false);
  const { pokemonName } = useParams();
  
  useEffect(() => {
    const fetcher = async () => {
      const {pokemon} = await getPokemonByName(pokemonName);
      setPokemon(pokemon);
    }
    fetcher();
  }, [pokemonName]);

  const retryImgLinkOnError = (e) => {
    if (onErrorRetried) return;
    setOnErrorRetried(true);
    e.currentTarget.src = getImgLinkForPokemonByID(pokemon);
  }

  if (!pokemon) return <div className="card-loader">Loading...</div>;

  const id = pokemon.id.toString();
  const name = capitalizeWords(pokemon.name);
  const imgLink = getImgLinkForPokemonByName(pokemon);
  const types = pokemon.types.map(type => type.type.name);
  const typesBackgroundStyle = typesToBackgroundStyle(types);
  const spanTypes = types.map(t => 
    <span 
      key={t} style={typesToBackgroundStyle([t])} 
      className="type-span" > {capitalize(t)} </span>
  );

  return (
  <div className="card" style={typesBackgroundStyle}>
    <div className="inner-card">
      <h2>{name} (#{id})</h2>
      <img alt={"No img found"} src={imgLink} decoding="async" loading="lazy" 
      onError={retryImgLinkOnError}></img>
      <p>Type(s): {spanTypes}</p>
      <div>
        <h3>Abilities:</h3>
        <ul>
          {pokemon.abilities.map((ability, idx) => (
            <li 
              key={ability.ability.name + idx} 
              className={ability.is_hidden ? "hidden-ability" : ""}>
              {capitalizeWords(ability.ability.name)}
              {ability.is_hidden ? " (Hidden)" : ""}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  );
};

export default PokeCard;