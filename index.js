import express from 'express'
import { connectDb } from './db.js'
import { PORT } from './config.js'
import cors from 'cors'

const app = express()
app.use(cors())

app.get('/getData', (req, res) => {
    res.json('Esta es la llamada que se hizo al backend y funciono')
})

connectDb()
app.listen(PORT)
console.log(`Server on port http://localhost:${PORT}`)
