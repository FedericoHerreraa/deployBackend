import express from 'express'
import { connectDb } from './db.js'
import { PORT } from './config.js'

const app = express()

app.get('/', (req, res) => {
    res.json('Hola mundo')
})

connectDb()
app.listen(PORT)
console.log(`Server on port http://localhost:${PORT}`)
