import { capitalizeWords } from "../helpers/Strings";
import { Link } from 'react-router-dom';
import './PokeTable.css';

const PokeTable = ({pokemons}) => {

  return (<>
    <h1 className="table-title">Table of pokemons</h1>
    <table className={'poke-table'}>
      <thead>
        <tr>
          <th>Name</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {pokemons.map(({name, url, id}) => (
          <tr key={id} style={{ cursor: 'pointer' }} >
            <td>
              <Link to={`/pokemon/${name}`} className="pokemon-link">
                {capitalizeWords(name)}
              </Link>
            </td>
            <td>
              <Link to={`/pokemon/${name}`} className="pokemon-link">
                {url}
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </>);
}

export default PokeTable;
