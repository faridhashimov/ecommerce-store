const router = require('express').Router()
const {
    addToCard,
    getCart,
    getAllCarts,
    updateProductQt,
    deleteCart,
    deleteProductFromCart
} = require('../controllers/cartController')
const { verifyToken, verifyTokenAndAdmin } = require('../utils/verifyToken')

router.get('/', getAllCarts)
router.route('/:userId').get(getCart).delete(deleteCart)
router.post('/addto/:userId', addToCard)
router.delete('/deletefrom/:userId/product/:id', deleteProductFromCart)
router.put('/:userId/product/:id/operator', updateProductQt)

module.exports = router
