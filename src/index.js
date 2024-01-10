
import express from 'express'
import { connectDb } from './db.js'
import { PORT } from './config.js'
import cors from 'cors'
import taskRoutes from './routes/task.routes.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', taskRoutes)

connectDb()
app.listen(PORT)
console.log(`Server on port http://localhost:${PORT}`)
