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

//DELETE PRODUCT
const getProductsCount = async (req, res) => {
    try {
        const productsCount = await Product.countDocuments({})
        res.status(201).json(productsCount)
    } catch (err) {
        res.status(401).json(err)
    }
}

//GET ALL PRODUCTS
const getAllProducts = async (req, res) => {
    const { query } = req
    const title = query.title
    const category = query.category
    const brand = query.brand
    const gender = query.gender
    const size = query.size
    const color = query.color
    const status = query.status
    const page = query.page
    const order = query.order

    const searchTitle =
        title && title !== 'all'
            ? { title: { $regex: title, $options: 'i' } }
            : {}
    const searchCategory = category && category !== 'all' ? { category } : {}
    const searchBrand = brand && brand !== 'all' ? { brand } : {}
    const searchGender = gender && gender !== 'all' ? { gender } : {}
    const searchSize = size && size !== 'all' ? { size } : {}
    const searchColor = color && color !== 'all' ? { color } : {}
    const searchStatus = status && status !== 'all' ? { status } : {}

    // console.log(req.query)

    let sortValue

    switch (order) {
        case 'low':
            sortValue = {
                price: 1,
            }
            break
        case 'high':
            sortValue = {
                price: -1,
            }
            break
        case 'new':
            sortValue = {
                createdAt: -1,
            }
            break
        default:
            sortValue = {}
    }

    try {
        const products = await Product.find({
            ...searchTitle,
            ...searchCategory,
            ...searchBrand,
            ...searchGender,
            ...searchSize,
            ...searchColor,
            ...searchStatus,
        })
            .sort(sortValue)
            .skip(10 * (page - 1))
            .limit(10)

        const productsCount = await Product.countDocuments({
            ...searchTitle,
            ...searchCategory,
            ...searchBrand,
            ...searchGender,
            ...searchSize,
            ...searchColor,
            ...searchStatus,
        })

        res.status(200).json({ data: products, count: productsCount })
    } catch (err) {
        res.status(401).json(err)
    }
}

//GET ALL CATEGORIES
const getAllCategories = async (req, res) => {
    try {
        const mensClothing = await Product.find({
            gender: 'Men',
            category: { $nin: ['Shoes', "Men's Accessories"] },
        }).select('category')
        const mensShoes = await Product.find({
            gender: 'Men',
            category: { $in: ['Shoes'] },
        }).select('category')
        const womensClothing = await Product.find({
            gender: 'Women',
            category: { $nin: ['Shoes', "Women's Accessories"] },
        }).select('category')
        const womensShoes = await Product.find({
            gender: 'Women',
            category: { $in: ['Shoes'] },
        }).select('category')
        const boys = await Product.find({ gender: 'Boys' })
        const girls = await Product.find({ gender: 'Girls' })
        const wAccessories = await Product.find({
            gender: 'Women',
            category: { $in: ["Women's Accessories"] },
        }).select('category')
        const mAccessories = await Product.find({
            gender: 'Men',
            category: { $in: ["Men's Accessories"] },
        }).select('category')
        res.status(200).json({
            mensClothing: [
                ...new Set(mensClothing.map((i) => i.category).flat()),
            ],
            mensShoes: [...new Set(mensShoes.map((i) => i.category).flat())],
            womensClothing: [
                ...new Set(womensClothing.map((i) => i.category).flat()),
            ],
            womensShoes: [
                ...new Set(womensShoes.map((i) => i.category).flat()),
            ],
            boys: [...new Set(boys.map((i) => i.category).flat())],
            girls: [...new Set(girls.map((i) => i.category).flat())],
            wAccessories: [
                ...new Set(wAccessories.map((i) => i.category).flat()),
            ],
            mAccessories: [
                ...new Set(mAccessories.map((i) => i.category).flat()),
            ],
        })
    } catch (error) {}
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

//GET USER REVIEWS
const getUserReviews = async (req, res) => {
    const { name } = req.query
    try {
        // const produtcReviews = await Product.find({
        //     reviews: { $elemMatch: { name } },
        // })
        const produtcReviews = await Product.aggregate([
            { $match: { reviews: { $elemMatch: { name } } } },
            {
                $project: {
                    month: { $month: '$createdAt' },
                },
            },
            {
                $group: {
                    _id: '$month',
                    total: { $sum: 1 },
                },
            },
        ])
        // const produtcReviews = await Product.aggregate([
        //     {
        //         $project: {
        //             reviews: {
        //                 $filter: {
        //                     input: '$reviews',
        //                     as: 'review',
        //                     cond: { $regex: { '$$review.name': name } },
        //                 },
        //             },
        //         },
        //     },
        // ])
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
    getAllCategories,
    getUserReviews,
    getProductsCount
}
