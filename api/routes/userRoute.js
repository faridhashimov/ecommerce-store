const router = require('express').Router()
const { getAllUsers, deleteUser } = require('../controllers/userController')

router.get('/', getAllUsers)
router.delete('/delete/:id', deleteUser)

module.exports = router
