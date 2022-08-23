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

// GET ALL USERS COUNT
const getUsersCount = async (req, res) => {
    try {
        const usersCount = await User.countDocuments({})
        res.status(200).json(usersCount)
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
    console.log(req.body)

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

// GET USER STATS
const getUserStats = async (req, res) => {
    const date = new Date()
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))

    try {
        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            {
                $project: {
                    month: { $month: '$createdAt' },
                },
            },
            {
                $group: {
                    _id: '$month',
                    total: { $sum: 1 },
                },
            },
        ])
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = { getAllUsers, updateUser, deleteUser, getUser, getUserStats, getUsersCount }
