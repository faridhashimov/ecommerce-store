const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        products: [
            {
                id: { type: String, required: true },
                quantity: { type: Number, default: 1 },
                productSize: { type: String, required: true },
                productColor: { type: String, required: true },
            },
        ],
        adress: { type: String, required: true },
        amount: { type: Number, required: true },
        status: { type: String, default: 'Pending' },
    },
    { timestamps: true }
)

module.exports = new mongoose.model('Order', OrderSchema)
