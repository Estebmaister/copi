import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getPokemons } from '../helpers/PokeRepo';
import PokeTableRow from './PokeTableRow';
import './PokeTable.css';

const LIMIT = 10;
const PokeTable = () => {
  const [pokemons, setPokemons] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  let pageParam = searchParams.get('page');
  pageParam = +pageParam ? +pageParam : 1;
  const [page, setPage] = useState(pageParam);
  const [totalPages, setTotalPages] = useState(0);

  const onPageChange = (page) => {
    setPage(page)
    setSearchParams(prevParams => {
      prevParams.set('page', page);
      return prevParams;
    });
  };

  const onPagePrev = (page) => onPageChange(Math.max(+page - 1, 1));
  const onPageNext = (page) => onPageChange(Math.min(+page + 1, totalPages));

  useEffect(() => {
    const offset = (page - 1) * LIMIT;
    const fetcher = async () => {
      const {pokemons, count} = await getPokemons(offset, LIMIT);
      setPokemons(pokemons);
      setTotalPages(Math.ceil(count / LIMIT));
    }
    fetcher();
    setPage(pageParam)
  }, [page, pageParam]);

  return (<>
    <h1 className="table-title">Table of pokemons</h1>
    <div className="pagination">
      <button onClick={() => onPagePrev(page)} disabled={page === 1}>
        Previous
      </button>
      <span>Page {page} of {totalPages}</span>
      <button onClick={() => onPageNext(page)} disabled={page === totalPages}>
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
        {pokemons.map(({name, id, url}) => (
          <PokeTableRow key={name} name={name} id={id} url={url}/>
        ))}
      </tbody>
    </table>
  </>);
}

export default PokeTable;
