import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext.jsx'

function friendlyAuthError(code) {
  switch (code) {
    case 'auth/email-already-in-use':
      return 'Email already in use.'
    case 'auth/weak-password':
      return 'Password is too weak.'
    case 'auth/invalid-email':
      return 'Invalid email address.'
    default:
      return 'Could not create account. Please try again.'
  }
}

export default function Register() {
  const { signUpWithEmail } = useAuth()
  const nav = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  async function onSubmit(e) {
    e.preventDefault()
    setError('')
    setBusy(true)
    try {
      await signUpWithEmail(email.trim(), password)
      nav('/app', { replace: true })
    } catch (err) {
      setError(friendlyAuthError(err?.code))
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="min-h-screen grid place-items-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-white border border-gray-200 shadow-sm p-6">
        <h1 className="text-xl font-bold">Create account</h1>
        <p className="text-sm text-gray-600 mt-1">Use email/password (Google sign-in is on the login page).</p>

        {error && (
          <div className="mt-4 text-sm text-red-700 bg-red-50 border border-red-100 rounded-lg p-3">
            {error}
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-3 mt-5">
          <label className="block">
            <span className="text-xs font-semibold text-gray-700">Email</span>
            <input
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400"
            />
          </label>

          <label className="block">
            <span className="text-xs font-semibold text-gray-700">Password</span>
            <input
              type="password"
              required
              minLength={8}
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400"
            />
            <span className="mt-1 block text-xs text-gray-500">Minimum 8 characters.</span>
          </label>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-700 text-white px-4 py-2.5 text-sm font-semibold hover:bg-blue-800 disabled:opacity-60"
            disabled={busy}
          >
            Create account
          </button>
        </form>

        <p className="mt-5 text-sm text-gray-600">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  )
}
