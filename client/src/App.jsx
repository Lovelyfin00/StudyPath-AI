import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LandingPage from './pages/Landing/LandingPage';

// Import your Features page — adjust path if folder name differs
import FeaturesPage from './pages/Features Page/FeaturesPage';

/**
 * App — Root component with React Router
 *
 * Routes:
 *  /           → Landing page
 *  /features   → Features page
 *
 * To add more pages later, just add a new <Route> here
 */
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/features" element={<FeaturesPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;