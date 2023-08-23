import user from '../../models/userModel.js'

const createUser = async (req, res) => {
    try {
        const [result] = await user.create(req.body)

        if(result.affectedRows === 1) {
            res.status(201).json({success: 'User created',
                user: {
                    id: result.insertId,
                    ...req.body
                }
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({error: 'Server error'})
    }
}

export default createUser