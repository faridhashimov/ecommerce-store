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

router.get('/income', getIncome)
router.route('/').post(createOrder).get(getAllOrders)
router.get('/count', getOrdersCount)
router.get('/sales', getSales)
router.route('/:id').get(getOrder).put(updateOrder).delete(deleteOrder)
router.get('/find/:userId', getUserOrders)

module.exports = router
