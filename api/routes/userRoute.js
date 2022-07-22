const router = require('express').Router()
const {
    getAllUsers,
    updateUser,
    getUser,
    deleteUser,
    getUserStats,
} = require('../controllers/userController')

router.get('/stats', getUserStats)
router.get('/', getAllUsers)
router.get('/:id', getUser)
router.put('/update/:id', updateUser)
router.delete('/delete/:id', deleteUser)

module.exports = router
