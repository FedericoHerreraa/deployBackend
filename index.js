import express from 'express'
import pg from 'pg'
import { config } from 'dotenv'

config()

const app = express()
const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
})

app.get('/', (req, res) => {
    res.json('Hola la concha de tu re putisima madre hijo de re mil re putras')
})

app.get('/ping', async (req, res) => {
    const result = await pool.query('SELECT NOW()')
    return res.json(result.rows[0])
})

app.listen(3000)
console.log('Server on port', 3000)