import { useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'

import ProtectedRoute from './components/common/ProtectedRoute.jsx'
import Login from './pages/Auth/Login.jsx'
import Register from './pages/Auth/Register.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import Pricing from './pages/Pricing.jsx'

function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [location.hash])

  return null
}

function LegacyHashRedirects() {
  const location = useLocation()
  const nav = useNavigate()

  useEffect(() => {
    if (location.pathname === '/' && location.hash === '#pricing') {
      nav('/pricing', { replace: true })
    }
  }, [location.pathname, location.hash, nav])

  return null
}

export default function App() {
  return (
    <>
      <ScrollToHash />
      <LegacyHashRedirects />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/app" element={<Dashboard />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
