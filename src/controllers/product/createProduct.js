const createProduct = (req, res) => {
    const dados = req.body
    res.json({message: "Produto criado com sucesso"})
}

export default createProduct