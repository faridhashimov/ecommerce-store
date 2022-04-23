const router = require('express').Router()
const {
    userRegister,
    userLogin,
    getAllUsers,
} = require('../controllers/userController')

router.post('/register', userRegister)
router.post('/login', userLogin)
router.get('/', getAllUsers)

module.exports = router
