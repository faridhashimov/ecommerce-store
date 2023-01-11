const router = require('express').Router()
const {
    createCart,
    deleteCart,
    getCart,
    updateCart,
    getAllCarts,
} = require('../controllers/cartController')
const { verifyToken, verifyTokenAndAdmin } = require('../utils/verifyToken')

router.route('/').post(createCart).get(getAllCarts)
router.route('/:userId').get(getCart).put(updateCart).delete(deleteCart)

module.exports = router
