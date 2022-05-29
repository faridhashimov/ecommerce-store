// const mongoose = require('mongoose')
const Product = require('../models/ProductModel')
const UserModel = require('../models/UserModel')

//ADD PRODUCT
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

    let findProduct = req.query

    console.log(findProduct)

    try {
        let products
        if (qNew) {
            products = await Product.find({
                createdAt: {
                    $gte: new Date(new Date() - qNew * 60 * 60 * 24 * 1000),
                },
            })
        } else {
            products = await Product.find(findProduct)
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

//=================REVIEWS===================

//ADD REVIEW
const createReview = async (req, res) => {
    const productID = req.params.productId
    const userID = req.params.userId
    const { title, desc, rating } = req.body
    try {
        const user = await UserModel.findById(userID)
        const product = await Product.findById(productID)
        if (product) {
            if (product.reviews.find((x) => x.name === user.username)) {
                return res
                    .status(400)
                    .json('You are already submitted a review')
            }
        }
        const newReview = {
            name: user.username,
            title,
            desc,
            rating,
        }
        product.reviews.push(newReview)
        const updatedProduct = await product.save()
        res.status(201).json(updatedProduct)
    } catch (err) {
        res.status(401).json(err)
    }
}

//GET PRODUCT REVIEW
const getProductReviews = async (req, res) => {
    try {
        const produtcReviews = await Product.findById(
            req.params.productId
        ).select('reviews')
        res.status(201).json(produtcReviews)
    } catch (err) {
        res.status(401).json(err)
    }
}

//UPDATE REVIEW
const updateReview = async (req, res) => {
    try {
        await Product.findOneAndUpdate(
            { _id: req.params.productId, 'reviews._id': req.params.reviewId },
            {
                $set: {
                    'reviews.$.helpfull': 'reviews.$.helpfull' + 1,
                },
            }
        )
        res.status(201).json('Review has been updated')
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
    createReview,
    getProductReviews,
    updateReview,
}
