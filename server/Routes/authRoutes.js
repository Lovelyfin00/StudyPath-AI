import { Router } from 'express'
import requireFirebaseAuth from '../middleware/requireFirebaseAuth.js'

const router = Router()

router.get('/me', requireFirebaseAuth, (req, res) => {
  res.json({ user: req.firebaseUser })
})

export default router
