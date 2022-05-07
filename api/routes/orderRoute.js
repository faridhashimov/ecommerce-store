const router = require('express').Router()
const {
    createOrder,
    getOrder,
    updateOrder,
    getAllOrders,
    deleteOrder,
} = require('../controllers/orderController')

router.route('/').post(createOrder).get(getAllOrders)
router.route('/:id').get(getOrder).put(updateOrder).delete(deleteOrder)

module.exports = router
