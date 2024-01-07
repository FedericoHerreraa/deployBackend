import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.json('Hola la concha de tu re putisima madre hijo de re mil re putras')
})

app.listen(3000)
console.log('Server on port', 3000)