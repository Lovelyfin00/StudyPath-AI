import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LandingPage from './pages/Landing/LandingPage';
import FeaturesPage from './pages/Features Page/FeaturesPage';
import UseCasesPage from './pages/UseCases/UseCasesPage';
import PricingPage from './pages/Pricing/PricingPage';
import AuthPage from './pages/Auth/AuthPage';

/**
 * App — Root component with React Router
 *
 * Auth pages don't show Navbar/Footer — they have their own full-screen layout
 *
 * Routes:
 *  /            → Landing page
 *  /features    → Features page
 *  /use-cases   → Use Cases page
 *  /pricing     → Pricing page
 *  /signin      → Sign In
 *  /signup      → Sign Up
 */

const AuthLayout = ({ screen }) => <AuthPage initialScreen={screen} />;

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
        {/* Auth pages — no navbar/footer */}
        <Route path="/signin" element={<AuthLayout screen="signin" />} />
        <Route path="/signup" element={<AuthLayout screen="signup" />} />

        {/* Main pages — with navbar/footer */}
        <Route path="/" element={<MainLayout><LandingPage /></MainLayout>} />
        <Route path="/features" element={<MainLayout><FeaturesPage /></MainLayout>} />
        <Route path="/use-cases" element={<MainLayout><UseCasesPage /></MainLayout>} />
        <Route path="/pricing" element={<MainLayout><PricingPage /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;