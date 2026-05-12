import admin from 'firebase-admin'

let firebaseApp = null

function env(name) {
  const v = process.env[name]
  return v && String(v).trim() ? String(v) : null
}

export function getFirebaseAdminApp() {
  if (firebaseApp) return firebaseApp

  // Prefer explicit credentials if provided. Otherwise fall back to ADC
  // (e.g. GOOGLE_APPLICATION_CREDENTIALS or a hosted environment).
  const projectId = env('FIREBASE_PROJECT_ID')
  const clientEmail = env('FIREBASE_CLIENT_EMAIL')
  const privateKeyRaw = env('FIREBASE_PRIVATE_KEY')

  if (projectId && clientEmail && privateKeyRaw) {
    const privateKey = privateKeyRaw.replace(/\\n/g, '\n')
    firebaseApp = admin.initializeApp({
      credential: admin.credential.cert({
        projectId,
        clientEmail,
        privateKey,
      }),
    })
    return firebaseApp
  }

  firebaseApp = admin.initializeApp()
  return firebaseApp
}

export async function verifyFirebaseIdToken(idToken) {
  getFirebaseAdminApp()
  return admin.auth().verifyIdToken(idToken)
}
