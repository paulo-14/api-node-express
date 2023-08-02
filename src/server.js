import express from 'express'
import {PORT} from './config.js'

const app = express()


app.get('/', (req, res) => {
    res.json({message: "Bem vindo à API"})
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})