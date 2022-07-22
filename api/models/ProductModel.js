const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        title: { type: String, required: true },
        desc: { type: String, required: true },
        rating: { type: Number, max: 5, required: true },
        helpfull: {type: Number, default: 0},
        unhelpfull: {type: Number, default: 0},

    },
    { timestamps: true }
)

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        desc: { type: String, required: true },
        brand: {type: String, required: true },
        img: { type: Array, required: true },
        category: { type: Array },
        gender: { type: String },
        size: { type: Array },
        color: { type: Array },
        price: { type: Number, required: true },
        status: { type: Array },
        inStock: { type: Boolean, default: true },
        reviews: [ReviewSchema],
    },
    { timestamps: true }
)

module.exports = new mongoose.model('Product', ProductSchema)
