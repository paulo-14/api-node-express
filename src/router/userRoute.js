import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    const user = [
        {id: 1, name: "Josias"},
        {id: 2, name: "Ana"},
        {id: 3, name: "Felipe"},
    ]
    res.json(user)
})

router.post('/', (req, res) => {
    //create
    const dados = req.body
    res.json({
        message: "Usuário criado com sucesso",
        user: dados
    })
})

router.put('/', (req, res) => {
    //update
    const dados = req.body
        
    res.json({
         message: "Atualização do usuário realizada com sucesso",
        user: dados
    })
})

router.delete('/', (req, res) => {
    //delete
    res.json({message: "Usuário excluído com sucesso"})
})

export default router