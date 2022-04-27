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
        // const product = await Product.findById(req.params.id)
        const product = await Product.findByIdAndUpdate(
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
    const qNew = req.query.new
    const qCat = req.query.category

    try {
        let products
        if (qNew) {
            products = await Product.find().sort({ createdAt: -1 })
        } else if (qCat) {
            products = await Product.find({
                category: { $in: [qCat] },
            })
        } else {
            products = await Product.find({})
        }
        res.status(200).json(products)
    } catch (err) {
        res.status(401).json(err)
    }
}

//GET SINGLE PRODUCT
const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (err) {
        res.status(401).json(err)
    }
}

module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
}
