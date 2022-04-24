const Product = require('../models/ProductModel')

//CREATE PRODUCT
const createProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body)
        await newProduct.save()
        res.status(201).json(newProduct)
    } catch (err) {
        res.status(401).json(err)
    }
}
//UPDATE PRODUCT
const updateProduct = async (req, res) => {
    try {
        const product = Product.findById(req.params.id)
        await Product.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        )
        res.status(201).json(product)
    } catch (err) {
        res.status(401).json(err)
    }
}

//DELETE PRODUCT
const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(201).json('Product hase been deleted')
    } catch (err) {
        res.status(401).json(err)
    }
}

//GET ALL PRODUCTS
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (err) {
        res.status(404).json(err)
    }
}

//GET SINGLE PRODUCT
const getProduct = async (req, res) => {}

module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
}
