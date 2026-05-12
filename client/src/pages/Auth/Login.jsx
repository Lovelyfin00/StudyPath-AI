import { useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext.jsx'

function friendlyAuthError(code) {
  switch (code) {
    case 'auth/invalid-credential':
      return 'Invalid email or password.'
    case 'auth/user-disabled':
      return 'This account is disabled.'
    case 'auth/popup-closed-by-user':
      return 'Popup closed before completing sign-in.'
    default:
      return 'Could not sign in. Please try again.'
  }
}

export default function Login() {
  const { signInWithEmail, signInWithGoogle } = useAuth()
  const nav = useNavigate()
  const location = useLocation()

  const from = useMemo(() => location.state?.from || '/app', [location.state])

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  async function onEmailLogin(e) {
    e.preventDefault()
    setError('')
    setBusy(true)
    try {
      await signInWithEmail(email.trim(), password)
      nav(from, { replace: true })
    } catch (err) {
      setError(friendlyAuthError(err?.code))
    } finally {
      setBusy(false)
    }
  }

  async function onGoogleLogin() {
    setError('')
    setBusy(true)
    try {
      await signInWithGoogle()
      nav(from, { replace: true })
    } catch (err) {
      setError(friendlyAuthError(err?.code))
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="min-h-screen grid place-items-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-white border border-gray-200 shadow-sm p-6">
        <h1 className="text-xl font-bold">Sign in</h1>
        <p className="text-sm text-gray-600 mt-1">Use Google or your email/password.</p>

        {error && (
          <div className="mt-4 text-sm text-red-700 bg-red-50 border border-red-100 rounded-lg p-3">
            {error}
          </div>
        )}

        <button
          type="button"
          className="mt-5 w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm font-semibold hover:bg-gray-50 disabled:opacity-60"
          onClick={onGoogleLogin}
          disabled={busy}
        >
          Continue with Google
        </button>

        <div className="my-5 flex items-center gap-3">
          <div className="h-px bg-gray-200 flex-1" />
          <div className="text-xs text-gray-500">or</div>
          <div className="h-px bg-gray-200 flex-1" />
        </div>

        <form onSubmit={onEmailLogin} className="space-y-3">
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
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-700 text-white px-4 py-2.5 text-sm font-semibold hover:bg-blue-800 disabled:opacity-60"
            disabled={busy}
          >
            Sign in
          </button>
        </form>

        <p className="mt-5 text-sm text-gray-600">
          No account? <Link to="/register">Create one</Link>
        </p>
      </div>
    </div>
  )
}
