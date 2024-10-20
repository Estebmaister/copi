import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokeTable from './components/PokeTable';
import PokeCard from './components/PokeCard';

const basename = document.querySelector('base')?.getAttribute('href') ?? '/'

function App() {
  return (
    <Router basename={basename}>
      <Routes>
        <Route exact path="/" element={<PokeTable />} />
        <Route path="/pokemon/:pokemonName" element={<PokeCard />} />
      </Routes>
    </Router>
  );
};

export default App;
