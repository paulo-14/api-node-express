const getProduct = (req, res) => {
    const product = {id: 2, name: "Caneta"}
    res.json(product)
}

export default getProduct