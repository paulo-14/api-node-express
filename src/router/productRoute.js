import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    const product = [
        {id: 1, name: "Lápis"},
        {id: 2, name: "Caneta"},
        {id: 3, name: "Caderno"},
    ]
    res.json(product)
})

router.post('/', (req, res) => {
    //create
    const dados = req.body

    res.json({message: "Produto criado com sucesso"})
})

router.put('/', (req, res) => {
    //update
    const dados = req.body

    res.json({message: "Atualização do produto realizada com sucesso"})
})

router.delete('/', (req, res) => {
    //delete
    res.json({message: "Produto excluído com sucesso"})
})

export default router