const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema(
    {
        _id: { type: String, required: true },
        userId: { type: String, required: true },
        products: [
            {
                _id: { type: String, required: true },
                quantity: { type: Number, default: 1 },
                brand: { type: String, required: true },
                title: { type: String, required: true },
                price: { type: Number, required: true },
                productSize: { type: String, required: true },
                productColor: { type: String, required: true },
                img: { type: Array, required: true },
            },
        ],
        adress: { type: String, required: true },
        amount: { type: Number, required: true },
        status: { type: String, default: 'Pending' },
    },
    { timestamps: true }
)

module.exports = new mongoose.model('Order', OrderSchema)
