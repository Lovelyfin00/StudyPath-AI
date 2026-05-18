import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import authRoutes from './Routes/authRoutes.js'

const app = express()

const port = process.env.PORT ? Number(process.env.PORT) : 4000
const corsOrigin = process.env.CORS_ORIGIN || 'http://localhost:5173'

app.use(
	cors({
		origin: corsOrigin,
		credentials: false,
	}),
)
app.use(express.json({ limit: '1mb' }))

app.get('/health', (_req, res) => {
	res.json({ ok: true })
})

app.use('/auth', authRoutes)

app.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(`Server listening on http://localhost:${port}`)
})
