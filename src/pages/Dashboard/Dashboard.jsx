import { useState } from 'react'
import { useAuth } from '../../context/AuthContext.jsx'
import { authedFetch } from '../../services/apiClient.js'

export default function Dashboard() {
  const { user, logout, getIdToken } = useAuth()
  const [tokenPreview, setTokenPreview] = useState('')
  const [serverMe, setServerMe] = useState(null)
  const [serverErr, setServerErr] = useState('')

  async function onShowToken() {
    const token = await getIdToken(false)
    setTokenPreview(token ? token.slice(0, 24) + '...' : '')
  }

  async function onFetchServerMe() {
    setServerErr('')
    setServerMe(null)
    try {
      const data = await authedFetch('/auth/me')
      setServerMe(data)
    } catch (e) {
      setServerErr(e?.message || 'Request failed')
    }
  }

  return (
    <div className="min-h-screen px-4 py-10">
      <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-2xl p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold">Dashboard</h1>
            <p className="text-sm text-gray-600 mt-1">Signed in as {user?.email || user?.uid}</p>
          </div>
          <button
            type="button"
            className="rounded-xl border border-gray-300 px-3 py-2 text-sm font-semibold hover:bg-gray-50"
            onClick={logout}
          >
            Sign out
          </button>
        </div>

        <div className="mt-6">
          <div className="text-xs font-semibold text-gray-700">User</div>
          <pre className="mt-2 text-xs bg-gray-50 border border-gray-200 rounded-xl p-3 overflow-auto">
{JSON.stringify(
  {
    uid: user?.uid,
    email: user?.email,
    displayName: user?.displayName,
    providerData: user?.providerData?.map((p) => ({ providerId: p.providerId, email: p.email })),
  },
  null,
  2,
)}
          </pre>

          <div className="mt-4 flex items-center gap-3">
            <button
              type="button"
              className="rounded-xl bg-gray-900 text-white px-3 py-2 text-sm font-semibold hover:bg-gray-800"
              onClick={onShowToken}
            >
              Show ID token preview
            </button>
            <button
              type="button"
              className="rounded-xl border border-gray-300 px-3 py-2 text-sm font-semibold hover:bg-gray-50"
              onClick={onFetchServerMe}
            >
              Call server /auth/me
            </button>
            {tokenPreview && <div className="text-xs text-gray-600">{tokenPreview}</div>}
          </div>

          {(serverMe || serverErr) && (
            <div className="mt-4">
              {serverErr && (
                <div className="text-sm text-red-700 bg-red-50 border border-red-100 rounded-lg p-3">
                  {serverErr}
                </div>
              )}
              {serverMe && (
                <pre className="mt-2 text-xs bg-gray-50 border border-gray-200 rounded-xl p-3 overflow-auto">
{JSON.stringify(serverMe, null, 2)}
                </pre>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
