import { verifyFirebaseIdToken } from '../services/firebaseAdmin.js'

function getBearerToken(req) {
  const h = req.headers.authorization
  if (!h) return null
  const [scheme, token] = h.split(' ')
  if (scheme !== 'Bearer' || !token) return null
  return token
}

export default async function requireFirebaseAuth(req, res, next) {
  try {
    const token = getBearerToken(req)
    if (!token) {
      return res.status(401).json({ error: 'Missing Bearer token' })
    }

    const decoded = await verifyFirebaseIdToken(token)
    req.firebaseUser = decoded
    return next()
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token' })
  }
}
