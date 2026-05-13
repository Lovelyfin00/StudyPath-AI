import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LandingPage from './pages/Landing/LandingPage';
import FeaturesPage from './pages/Features Page/FeaturesPage';
import UseCasesPage from './pages/UseCases/UseCasesPage';
import PricingPage from './pages/Pricing/PricingPage';

/**
 * App — Root component with React Router
 *
 * Routes:
 *  /            → Landing page
 *  /features    → Features page
 *  /use-cases   → Use Cases page
 *  /pricing     → Pricing page
 *
 * To add more pages, just add a new <Route> here
 */
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"          element={<LandingPage />}  />
        <Route path="/features"  element={<FeaturesPage />} />
        <Route path="/use-cases" element={<UseCasesPage />} />
        <Route path="/pricing"   element={<PricingPage />}  />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;