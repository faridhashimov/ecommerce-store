const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        products: [
            {
                productId: { type: String, required: true },
                title: { type: String, required: true },
                size: { type: String, required: true },
                color: { type: String, required: true },
                price: { type: Number, required: true },
                quantity: { type: Number, default: 1 },
            },
        ],
    },
    { timestamps: true }
)

module.exports = new mongoose.model('Cart', CartSchema)
