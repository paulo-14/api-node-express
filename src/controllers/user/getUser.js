const getUser = (req, res) => {
    const user = {id: 2, name: "Ana"}
    res.json(user)
}

export default getUser
