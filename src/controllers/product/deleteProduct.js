import product from '../../models/productModel.js'

const deleteProduct = async (req, res) => {
    try {
        const id = req.body.id
        const [result] = await product.remove(id)
        if(result.affectedRows === 1) {
            res.status(200).json({success: `Product id: ${id} deleted successfully.`})
        } else {
            res.status(404).json({error: `Product id: ${id} not found.`})
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({error: 'Server error'})
    }
}

export default deleteProduct