import { useState, useEffect } from 'react'
import Home from './pages/Home'
import Pricing from './pages/Pricing'

export default function App() {
  const [page, setPage] = useState(window.location.hash)

  useEffect(() => {
    const onHash = () => setPage(window.location.hash)
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  if (page === '#pricing') return <Pricing />
  return <Home />
}
