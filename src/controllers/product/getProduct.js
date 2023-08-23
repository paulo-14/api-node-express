import product from '../../models/productModel.js'

const getProduct = async (req, res) => {
    try {
        const [rows, fields] = await product.get(req.body.id)
        if (rows.length === 0) {
            res.status(404).json({message: 'Product not found'})
        } else {
            delete rows[0].pass
            res.json(rows[0])
        }
    } catch (err) {
        console.error(err)
        res.status(500).json({message: 'Internal server error'})
    }
}

export default getProduct
