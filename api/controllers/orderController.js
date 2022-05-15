const Order = require('../models/OrderModel')

const createOrder = async (req, res) => {
    try {
        const newOrder = await Order.create(req.body)
        res.status(200).json(newOrder)
    } catch (err) {
        res.status(401).json(err)
    }
}

const updateOrder = async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.body.id,
            {
                $set: req.body,
            },
            { new: true }
        )
        res.status(200).json(updatedOrder)
    } catch (err) {
        res.status(401).json(err)
    }
}

// DELETE ORDER
const deleteOrder = async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.body.id)
        res.status(200).json('Order has been deleted')
    } catch (err) {
        res.status(401).json(err)
    }
}

// GET ORDER
const getOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.body.id)
        res.status(200).json(order)
    } catch (err) {
        res.status(401).json(err)
    }
}

// GET USER ORDERS
const getUserOrders = async (req, res) => {
    // const { userId } = req.params
    try {
        const userOrders = await Order.find({ userId: req.params.userId }).exec()
        res.status(200).json(userOrders)
    } catch (err) {
        res.status(401).json(err)
    }
}

// GET USER ORDERS
const getAllOrders = async (req, res) => {
    try {
        const allOrders = await Order.find({})
        res.status(200).json(allOrders)
    } catch (err) {
        res.status(401).json(err)
    }
}

module.exports = {
    createOrder,
    updateOrder,
    deleteOrder,
    getOrder,
    getUserOrders,
    getAllOrders,
}
