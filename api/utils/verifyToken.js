const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const accessToken = req.headers.token
    if (accessToken) {
        const token = accessToken.replace('Bearer ', '')
        jwt.verify(token, process.env.JWT_KEY, (error, user) => {
            if (error) res.status(401).json('Token is not valid')
            req.user = user
            next()
        })
    } else {
        res.status(401).json('You are not authenticated!')
    }
}

const verifyTokenAndUser = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next()
        } else {
            res.status(401).json('You are not allowed to do that!')
        }
    })
}

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next()
        } else {
            res.status(401).json('You are not allowed to do that!')
        }
    })
}

module.exports = { verifyToken, verifyTokenAndUser, verifyTokenAndAdmin }
