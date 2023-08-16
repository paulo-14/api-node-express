const updateUser = (req, res) => {
    const dados = req.body
        
    res.json({
        message: "Atualização do usuário realizada com sucesso",
        user: dados
    })
}

export default updateUser