import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokeTable from './components/PokeTable';
import PokeCard from './components/PokeCard';

function App() {
  return (
    <Router basename="/copi">
      <Routes>
        <Route exact path="/" element={<PokeTable />} />
        <Route path="/pokemon/:pokemonName" element={<PokeCard />} />
      </Routes>
    </Router>
  );
};

export default App;
