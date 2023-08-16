import user from '../../models/userModel.js'

const createUser = async (req, res) => {
    try {
        const [result] = await user.create(req.body)
        console.log(result)

        if(result.affectedRows === 1) {
            [result].status(201).json({
                message: 'User created successfully',
                user: {
                    id: result.insertId,
                    ...req.body
                }
            })
        }
    } catch (error) {
        console.log(error)
        [result].status(500).json({
            message: 'Server error'
        })
    }
}

export default createUser