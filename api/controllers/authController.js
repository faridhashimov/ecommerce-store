const User = require('../models/UserModel')
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')

// REGISTER USER
const userRegister = async (req, res) => {
    //Checking if the user is already exists
    const { email, password } = req.body

    //Password hashing
    const hashedPassword = CryptoJS.AES.encrypt(
        password,
        process.env.S_KEY
    ).toString()

    try {
        const user = await User.findOne({ email })
        if (user) {
            return res.status(401).json('User already exists')
        }
        const newUser = new User({
            username: email.substr(0, email.indexOf('@')),
            email,
            password: hashedPassword,
        })
        await newUser.save()
        res.status(200).json(newUser)
    } catch (err) {
        res.status(401).json(err)
    }
}

const generateAccessToken = (user) => {
    return jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        process.env.JWT_KEY,
        {
            expiresIn: '5s',
        }
    )
}

const generateRefreshToken = (user) => {
    return jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        process.env.JWT_REFRESH_KEY
    )
}

// LOGIN USER
const userLogin = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            return res.status(401).json('Wrong credentialss')
        }
        const originalPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.S_KEY
        ).toString(CryptoJS.enc.Utf8)

        //Comparing passwords
        if (req.body.password !== originalPassword) {
            return res.status(401).json('Wrong credentials')
        }
        const { password, ...others } = user._doc

        const accessToken = generateAccessToken(user)
        const refreshToken = generateRefreshToken(user)

        res.cookie('jwt', refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })

        res.status(201).json({
            accessToken,
            ...others,
        })
    } catch (err) {
        res.status(401).json(err)
    }
}

const refresh = (req, res) => {
    const cookies = req.cookies

    if (!cookies?.jwt) return res.status(401).json('Unauthorized')

    const refreshToken = cookies.jwt

    jwt.verify(
        refreshToken,
        process.env.JWT_REFRESH_KEY,
        async (err, decoded) => {
            if (err) {
                return res.status(403).json('Forbidden')
            }

            console.log(decoded)

            const user = await User.findOne({ _id: decoded.id })

            if (!user) {
                return res.status(401).json('Unauthorized')
            }

            const accessToken = generateAccessToken(user)
            const { password, ...others } = user._doc

            res.status(201).json({ accessToken, ...others })
        }
    )
}

const logOut = (req, res) => {
    const cookies = req.cookies
    if (!cookies?.jwt) return res.status(204)

    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true })
}

module.exports = { userRegister, userLogin, refresh, logOut }
