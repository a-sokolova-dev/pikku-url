import dotenv from 'dotenv'
import express from 'express'

import connectDB from './config/db.js'
import routes from './routes/index.js'

dotenv.config()

const app = express()

connectDB()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(routes)

// Server Setup
const PORT = process.env.PORT || 3333
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`> Ready on http://localhost:${PORT}`)
})
