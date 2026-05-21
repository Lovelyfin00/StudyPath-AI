import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Public pages
import LandingPage       from './pages/Landing/LandingPage';
import FeaturesPage      from './pages/Features Page/FeaturesPage';
import UseCasesPage      from './pages/UseCases/UseCasesPage';
import PricingPage       from './pages/Pricing/PricingPage';

// Auth + Onboarding
import AuthPage          from './pages/Auth/AuthPage';
import OnboardingPage    from './pages/Onboarding/OnboardingPage';

// Dashboard pages
import DashboardPage     from './pages/Dashboard/DashboardPage';
import ModulesPage       from './pages/Dashboard/ModulesPage';
import ModuleDetailPage  from './pages/Dashboard/ModuleDetailPage';
import QuizzesPage       from './pages/Dashboard/QuizzesPage';
import FlashcardsPage    from './pages/Dashboard/FlashcardsPage';
import NotesPage         from './pages/Dashboard/NotesPage';
import ProgressPage      from './pages/Dashboard/ProgressPage';
import CalendarPage      from './pages/Dashboard/CalendarPage';
import BookmarksPage     from './pages/Dashboard/BookmarksPage';
import ProfilePage       from './pages/Dashboard/ProfilePage';
import SettingsPage      from './pages/Dashboard/SettingsPage';

/**
 * App — Root component
 *
 * User flow:
 *  / → landing
 *  /signup → /onboarding → /dashboard
 *  /signin → /dashboard
 *  /dashboard/modules/:id → module detail
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
        {/* ── Public pages ── */}
        <Route path="/"          element={<MainLayout><LandingPage /></MainLayout>}  />
        <Route path="/features"  element={<MainLayout><FeaturesPage /></MainLayout>} />
        <Route path="/use-cases" element={<MainLayout><UseCasesPage /></MainLayout>} />
        <Route path="/pricing"   element={<MainLayout><PricingPage /></MainLayout>}  />

        {/* ── Auth + Onboarding ── */}
        <Route path="/signin"     element={<AuthPage initialScreen="signin" />} />
        <Route path="/signup"     element={<AuthPage initialScreen="signup" />} />
        <Route path="/onboarding" element={<OnboardingPage />}                  />

        {/* ── Dashboard pages ── */}
        <Route path="/dashboard"                  element={<DashboardPage />}    />
        <Route path="/dashboard/modules"          element={<ModulesPage />}      />
        <Route path="/dashboard/modules/:id"      element={<ModuleDetailPage />} />
        <Route path="/dashboard/quizzes"          element={<QuizzesPage />}      />
        <Route path="/dashboard/flashcards"       element={<FlashcardsPage />}   />
        <Route path="/dashboard/notes"            element={<NotesPage />}        />
        <Route path="/dashboard/progress"         element={<ProgressPage />}     />
        <Route path="/dashboard/calendar"         element={<CalendarPage />}     />
        <Route path="/dashboard/bookmarks"        element={<BookmarksPage />}    />
        <Route path="/dashboard/profile"          element={<ProfilePage />}      />
        <Route path="/dashboard/settings"         element={<SettingsPage />}     />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
