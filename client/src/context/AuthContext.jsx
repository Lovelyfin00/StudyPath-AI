import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { auth, googleProvider } from '../firebase'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (nextUser) => {
      setUser(nextUser)
      setLoading(false)
    })
    return () => unsub()
  }, [])

  const value = useMemo(() => {
    return {
      user,
      loading,
      async signInWithGoogle() {
        return signInWithPopup(auth, googleProvider)
      },
      async signUpWithEmail(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
      },
      async signInWithEmail(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
      },
      async logout() {
        return signOut(auth)
      },
      async getIdToken(forceRefresh = false) {
        if (!auth.currentUser) return null
        return auth.currentUser.getIdToken(forceRefresh)
      },
    }
  }, [user, loading])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within <AuthProvider>')
  return ctx
}
