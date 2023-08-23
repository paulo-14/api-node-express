import product from "../../models/productModel.js"

const updateProduct = async (req, res) => {
    try {
        const [result] = await product.update(req.body)
        if(result.affectedRows === 1) {
            res.status(200).json({
                success: `Product id: ${req.body.id} updated successfully.`,
                product: {...req.body}
            })
        } else {
            res.status(404).json({error: `Product id: ${req.body.id} not found`})
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({error: 'Server error'})
    }
}

export default updateProduct