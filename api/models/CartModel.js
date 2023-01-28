const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        products: [
            {
                productId: { type: String, required: true },
                title: { type: String, required: true },
                productColor: { type: String, required: true },
                productSize: { type: String, required: true },
                img: { type: String, required: true },
                brand: { type: String, required: true },
                price: { type: Number, required: true },
                quantity: { type: Number, default: 1 },
            },
        ],
    },
    { timestamps: true }
)

module.exports = new mongoose.model('Cart', CartSchema)
