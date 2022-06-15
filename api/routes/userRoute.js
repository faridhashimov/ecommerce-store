const router = require('express').Router()
const {
    getAllUsers,
    updateUser,
    getUser,
    deleteUser,
} = require('../controllers/userController')

router.get('/', getAllUsers)
router.get('/:id', getUser)
router.put('/update/:id', updateUser)
router.delete('/delete/:id', deleteUser)

module.exports = router
