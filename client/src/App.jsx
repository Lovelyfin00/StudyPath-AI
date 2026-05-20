import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LandingPage from './pages/Landing/LandingPage';
import FeaturesPage from './pages/Features Page/FeaturesPage';
import UseCasesPage from './pages/UseCases/UseCasesPage';
import PricingPage from './pages/Pricing/PricingPage';
import AuthPage from './pages/Auth/AuthPage';
import DashboardPage from './pages/Dashboard/DashboardPage';

/**
 * App — Root component with React Router
 *
 * Three layout types:
 *  1. MainLayout   — public pages (navbar + footer)
 *  2. AuthLayout   — auth pages (full screen, no navbar/footer)
 *  3. Dashboard    — dashboard pages (sidebar layout, no navbar/footer)
 */

const MainLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth pages — full screen */}
        <Route path="/signin" element={<AuthPage initialScreen="signin" />} />
        <Route path="/signup" element={<AuthPage initialScreen="signup" />} />

        {/* Dashboard pages — sidebar layout */}
        <Route path="/dashboard" element={<DashboardPage />} />

        {/* Public pages — navbar + footer */}
        <Route path="/"          element={<MainLayout><LandingPage /></MainLayout>}   />
        <Route path="/features"  element={<MainLayout><FeaturesPage /></MainLayout>}  />
        <Route path="/use-cases" element={<MainLayout><UseCasesPage /></MainLayout>}  />
        <Route path="/pricing"   element={<MainLayout><PricingPage /></MainLayout>}   />
      </Routes>
    </BrowserRouter>
  );
};

export default App;