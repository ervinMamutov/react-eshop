import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Smartphones from './components/Smartphones';
import NoMatchPage from './components/NoMatchPage';
import Motorcycles from './components/Motorcycles';
import MensShoes from './components/MensShoes';

function App() {
  return (
    <div className="wrapper">
      <Header title="Evolution Shop" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="smartphones" element={<Smartphones />} />
        <Route path="motorcycles" element={<Motorcycles />} />
        <Route path="mensShoes" element={<MensShoes />} />
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
    </div>
  );
}

export default App;
