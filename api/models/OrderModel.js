const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        products: [
            {
                productId: { type: String, required: true },
                quantity: { type: Number, default: 1 },
                size: { type: String, required: true },
                color: { type: String, required: true },
            },
        ],
        adress: { type: String, required: true },
        amount: { type: Number, required: true },
        status: { type: String, default: 'Pending' },
    },
    { timestamps: true }
)

module.exports = new mongoose.model('Order', OrderSchema)
