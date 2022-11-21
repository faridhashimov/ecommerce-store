const router = require('express').Router()
const {
    createOrder,
    getOrder,
    updateOrder,
    getAllOrders,
    getUserOrders,
    deleteOrder,
    getIncome,
    getOrdersCount,
    getSales,
} = require('../controllers/orderController')
const { verifyToken, verifyTokenAndAdmin } = require('../utils/verifyToken')

router.get('/income', getIncome)
router.route('/').post(createOrder).get(getAllOrders)
router.get('/count', verifyTokenAndAdmin, getOrdersCount)
router.get('/sales', verifyTokenAndAdmin, getSales)
router.route('/:id').get(getOrder).put(updateOrder).delete(deleteOrder)
router.get('/find/:userId', verifyToken, getUserOrders)

module.exports = router
