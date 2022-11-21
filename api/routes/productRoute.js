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
    getAllCategories,
    getUserReviews,
    getProductsCount
} = require('../controllers/productController')
const { verifyTokenAndAdmin } = require('../utils/verifyToken')

router.route('/').post(createProduct).get(getAllProducts)
router.get('/count', verifyTokenAndAdmin, getProductsCount)
router.get('/reviews/userreviews', getUserReviews)
router.route('/:id').get(getProduct).put(updateProduct).delete(deleteProduct)
router.post('/:productId/:userId/reviews', createReview)
router.get('/:productId/reviews', getProductReviews)
router.put('/update/:productId/:reviewId', updateReview)
router.get('/find/categories', getAllCategories)

module.exports = router
