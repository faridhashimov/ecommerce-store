const User = require('../models/UserModel')
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')

// REGISTER USER
const userRegister = async (req, res) => {
    //Checking if the user is already exists
    const { username, email, password } = req.body

    //Password hashing
    const hashedPassword = CryptoJS.AES.encrypt(
        password,
        process.env.S_KEY
    ).toString()

    try {
        const user = await User.findOne({ username, email })
        if (user) {
            return res.status(401).json('User already exists')
        }
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        })
        await newUser.save()
    } catch (err) {
        res.status(401).json(err)
    }
}

// LOGIN USER
const userLogin = async (req, res) => {
    try {
        const existedUser = await User.findOne({ email: req.body.email })
        if (!existedUser) {
            return res.status(401).json('Wrong credentialss')
        }
        const originalPassword = CryptoJS.AES.decrypt(
            existedUser.password,
            process.env.S_KEY
        ).toString(CryptoJS.enc.Utf8)

        //Comparing passwords
        if (req.body.password !== originalPassword) {
            return res.status(401).json('Wrong credentials')
        }
        const { password, ...others } = existedUser._doc

        const accessToken = jwt.sign(
            { email: req.body.email, password: req.body.password },
            process.env.JWT_KEY,
            {
                expiresIn: '1d',
            }
        )

        res.status(201).json({
            accessToken,
            ...others,
        })
    } catch (err) {
        res.status(401).json(err)
    }
}

// GET ALL USERS
const getAllUsers = async (req, res) => {
    //Checking if the user is already exists
    try {
        const users = await User.find({})
        res.status(200).json(users)
    } catch (err) {
        res.status(401).json(err)
    }
}

module.exports = { userRegister, userLogin, getAllUsers }
