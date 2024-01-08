import express from 'express'
import { connectDb } from './db.js'
import { PORT } from './config.js'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

connectDb()
app.listen(PORT)
console.log(`Server on port http://localhost:${PORT}`)
