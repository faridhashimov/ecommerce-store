const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        desc: { type: String, required: true },
        img: { type: Array, required: true },
        category: { type: Array },
        size: { type: Array },
        color: { type: Array },
        price: { type: Number, required: true },
        status: { type: Array },
        inStock: { type: Boolean, default: true },
    },
    { timestamps: true }
)

module.exports = new mongoose.model('Product', ProductSchema)
