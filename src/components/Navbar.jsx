import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const navLinks = [
  { label: 'Features', to: '/#features' },
  { label: 'How it Works', to: '/#how-it-works' },
  { label: 'Use Cases', to: '/#use-cases' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Resources', to: '/#resources' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-sm border-b border-gray-100' : 'border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors duration-200 rounded-md hover:bg-purple-50"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors duration-200"
            >
              Log in
            </Link>
            <Link
              to="/register"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-purple-600 text-white text-sm font-semibold hover:bg-purple-700 transition-colors duration-200 shadow-sm"
            >
              Get Started Free
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-gray-500 hover:text-purple-600 hover:bg-purple-50 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-0.5 bg-current mb-1" />
            <span className="block w-5 h-0.5 bg-current mb-1" />
            <span className="block w-5 h-0.5 bg-current" />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-1 fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 flex flex-col gap-2 px-3">
              <Link
                to="/login"
                className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Log in
              </Link>
              <Link
                to="/register"
                className="inline-flex justify-center items-center px-4 py-2 rounded-lg bg-purple-600 text-white text-sm font-semibold hover:bg-purple-700 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Get Started Free
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}