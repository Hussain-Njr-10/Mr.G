import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VehicleDetails from './pages/VehicleDetails';
import Fleet from './pages/Fleet';
import DestinationsPage from './pages/DestinationsPage';
import Experience from './pages/Experience';
import About from './pages/About';
import Reserve from './pages/Reserve';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/fleet/:id" element={<VehicleDetails />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/about" element={<About />} />
        <Route path="/reserve" element={<Reserve />} />
      </Routes>
    </Router>
  );
}

export default App;
