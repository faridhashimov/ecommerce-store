const router = require('express').Router()
const {
    createProduct,
    deleteProduct,
    updateProduct,
    getAllProducts,
    getProduct,
} = require('../controllers/productController')

router.route('/').post(createProduct).get(getAllProducts)
router.route('/:id').get(getProduct).put(updateProduct).delete(deleteProduct)

module.exports = router
