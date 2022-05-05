const router = require('express').Router()
const {
    createProduct,
    deleteProduct,
    updateProduct,
    getAllProducts,
    getProduct,
    createReview,
    getProductReviews,
    updateReview,
} = require('../controllers/productController')

router.route('/').post(createProduct).get(getAllProducts)
router.route('/:id').get(getProduct).put(updateProduct).delete(deleteProduct)
router.post('/:productId/:userId/reviews', createReview)
router.get('/:productId/reviews', getProductReviews)
router.put('/update/:productId/:reviewId',updateReview)

module.exports = router
