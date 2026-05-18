import { auth } from '../firebase'

const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000'

export async function authedFetch(path, init = {}) {
  const user = auth.currentUser
  if (!user) throw new Error('Not authenticated')

  const token = await user.getIdToken()
  const headers = new Headers(init.headers || {})
  headers.set('Authorization', `Bearer ${token}`)

  if (!headers.has('Content-Type') && init.body) {
    headers.set('Content-Type', 'application/json')
  }

  const res = await fetch(`${baseUrl}${path}`, {
    ...init,
    headers,
  })

  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(`Request failed (${res.status}): ${text || res.statusText}`)
  }

  const contentType = res.headers.get('content-type') || ''
  if (contentType.includes('application/json')) return res.json()
  return res.text()
}
