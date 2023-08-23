import user from '../../models/userModel.js'

const deleteUser = async (req, res) => {
    try {
        const id = req.body.id
        const [result] = await user.remove(id)
        if(result.affectedRows === 1) {
            res.status(200).json({success: `User id: ${id} deleted successfully.`})
        } else {
            res.status(404).json({error: `User id: ${id} not found.`})
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({error: 'Server error'})
    }
}

export default deleteUser