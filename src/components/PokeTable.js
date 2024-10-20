import { useEffect, useState } from 'react';
import { capitalizeWords } from "../helpers/Strings";
import { Link } from 'react-router-dom';
import { getPokemons } from '../helpers/PokeRepo';
import './PokeTable.css';

const LIMIT = 10;
const PokeTable = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const offset = (page - 1) * LIMIT;
    const fetcher = async () => {
      const pokemonData = await getPokemons(offset, LIMIT);
      setPokemons(pokemonData);
      setTotalPages(Math.ceil(pokemonData.count / LIMIT));
    }
    fetcher();
  }, [page]);

  return (<>
    <h1 className="table-title">Table of pokemons</h1>
    <div className="pagination">
      <button onClick={() => setPage((p) => Math.max(p - 1, 1))} disabled={page === 1}>
        Previous
      </button>
      <span>Page {page} of {totalPages}</span>
      <button onClick={() => setPage((p) => Math.min(p + 1, totalPages))} disabled={page === totalPages}>
        Next
      </button>
    </div>
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
