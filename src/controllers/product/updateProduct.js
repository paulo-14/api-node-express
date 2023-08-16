const updateProduct = (req, res) => {
    const dados = req.body
    res.json({message: "Atualização do produto realizada com sucesso"})
}

export default updateProduct