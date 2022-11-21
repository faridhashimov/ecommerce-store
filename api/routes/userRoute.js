const router = require('express').Router()
const {
    getAllUsers,
    updateUser,
    getUser,
    deleteUser,
    getUserStats,
    getUsersCount,
} = require('../controllers/userController')
const { verifyTokenAndAdmin } = require('../utils/verifyToken')

router.get('/stats', verifyTokenAndAdmin, getUserStats)
router.get('/', verifyTokenAndAdmin, getAllUsers)
router.get('/count', verifyTokenAndAdmin, getUsersCount)
router.get('/:id', getUser)
router.put('/update/:id', updateUser)
router.delete('/delete/:id', deleteUser)

module.exports = router
