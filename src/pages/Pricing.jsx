import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PricingSection from '../components/PricingSection'

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <PricingSection />
      </main>
      <Footer />
    </div>
  )
}