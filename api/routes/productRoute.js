const router = require('express').Router()
const {
    getAllProducts,
    getProduct,
} = require('../controllers/productController')

router.get('/', getAllProducts)
router.get('/:productID', getProduct)
