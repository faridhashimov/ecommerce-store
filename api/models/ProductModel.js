const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    img: { type: Array, required: true },
    title: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, default: 1 },
    color: { type: Array },
    size: { type: Array },
    category: { type: Array },
})

module.exports = new mongoose.model('Product', ProductSchema)
