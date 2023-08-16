const listProducts = (req, res) => {
    const products = [
        {id: 1, name: "Lápis"},
        {id: 2, name: "Caneta"},
        {id: 3, name: "Caderno"},
    ]
    res.json(products)
}

export default listProducts