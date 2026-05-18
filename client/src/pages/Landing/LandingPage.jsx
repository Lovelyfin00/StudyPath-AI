import Hero from './sections/Hero';
import HowItWorks from './sections/HowItWorks';
import Features from './sections/Features';
import UseCases from './sections/UseCases';
import CTA from './sections/CTA';

/**
 * LandingPage — Composes all landing page sections in order
 * Each section lives in its own file under ./sections/
 * To reorder sections, just move lines around here
 *
 * NOTE: Pricing section removed — not part of phase 1
 */
const LandingPage = () => {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Features />
      <CTA />
    </main>
  );
};

export default LandingPage;