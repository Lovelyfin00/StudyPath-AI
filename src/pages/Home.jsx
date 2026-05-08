import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import UseCasesGrid from '../components/UseCasesGrid'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <UseCasesGrid />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
