import { useEffect, useState } from 'react';
import { capitalize, capitalizeWords } from "../helpers/Strings";
import { Link } from 'react-router-dom';
import { getPokemonByName } from '../helpers/PokeRepo';
import { typesToBackgroundStyle } from '../helpers/PokeTypes';

const PokeTableRow = ({name, id, url}) => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetcher = async () => {
      const {pokemon} = await getPokemonByName(name);
      setTypes(pokemon.types);
    }
    fetcher();
  }, [name]);

  const showTypes = types.map(type => type.type.name);
  const spanTypes = showTypes.map(t => 
    <span 
      key={t} style={typesToBackgroundStyle([t])} 
      className="type-span" > {capitalize(t)} </span>
  );

  return (<>
    <tr key={id}>
      <td>
        <Link to={`/pokemon/${name}`} className="pokemon-link">
          {capitalizeWords(name)}
          <div className='span-div'>{spanTypes}</div>
        </Link>
      </td>
      <td>
        <Link to={`/pokemon/${name}`} className="pokemon-link">
          {url}
        </Link>
      </td>
    </tr>
  </>);
}

export default PokeTableRow;
