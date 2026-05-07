import './index.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LandingPage from './pages/Landing/LandingPage';

/**
 * App — Root component
 *
 * Structure:
 *  <Navbar />        — sticky top nav, lives across all pages
 *  <LandingPage />   — the main landing page (phase 1)
 *  <Footer />        — site footer
 *
 * When you add more pages later (Dashboard, Course, Upload),
 * replace LandingPage here with a React Router <Routes> setup.
 */
const App = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Footer />
    </>
  );
};

export default App;
