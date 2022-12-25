const router = require('express').Router()
const {
    createCart,
    deleteCart,
    getCart,
    updateCart,
} = require('../controllers/cartController')
const { verifyToken, verifyTokenAndAdmin } = require('../utils/verifyToken')

router.post('/', createCart)
router.get('/userId', getCart)
router.put('/userId', updateCart)
router.delete('/userId', deleteCart)

module.exports = router
