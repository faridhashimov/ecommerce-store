const router = require('express').Router()
const {
    userRegister,
    userLogin,
    refresh,
    logOut,
} = require('../controllers/authController')

router.post('/register', userRegister)
router.post('/login', userLogin)
router.get('/refresh', refresh)
router.post('/logOut', logOut)

module.exports = router
