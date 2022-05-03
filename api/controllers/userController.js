const User = require('../models/UserModel')

// GET ALL USERS
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json(users)
    } catch (err) {
        res.status(401).json(err)
    }
}
// DELETE USER
const deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json(`User ${user.email} has been deleted`)
    } catch (err) {
        res.status(401).json(err)
    }
}

module.exports = { getAllUsers, deleteUser }
