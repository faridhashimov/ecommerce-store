const User = require('../models/UserModel')
const CryptoJS = require('crypto-js')

// GET ALL USERS
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({})
        const usersNew = users.map((i) => {
            const { password, ...others } = i._doc
            return others
        })
        res.status(200).json(usersNew)
    } catch (err) {
        res.status(401).json(err)
    }
}

// GET USER
const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const { password, ...others } = user._doc
        res.status(200).json(others)
    } catch (err) {
        res.status(401).json(err)
    }
}

// UPDATE USER
const updateUser = async (req, res) => {
    const { password, ...others } = req.body

    try {
        const existedUSer = await User.findById(req.params.id)

        if (
            existedUSer &&
            password ===
                CryptoJS.AES.decrypt(
                    existedUSer.password,
                    process.env.S_KEY
                ).toString(CryptoJS.enc.Utf8)
        ) {
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id,
                {
                    ...others,
                    password: CryptoJS.AES.encrypt(
                        password,
                        process.env.S_KEY
                    ).toString(),
                },
                { new: true }
            )
            res.status(200).json(updatedUser)
        } else {
            return res.status(401).json('Wrong credentials')
        }
    } catch (err) {
        res.status(401).json(err.message)
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

module.exports = { getAllUsers, updateUser, deleteUser, getUser }
