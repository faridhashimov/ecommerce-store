const Order = require('../models/OrderModel')

// CREATE ORDER
const createOrder = async (req, res) => {
    try {
        const newOrder = await Order.create(req.body)
        res.status(200).json(newOrder)
    } catch (err) {
        res.status(401).json(err)
    }
}

// UPDATE ORDER
const updateOrder = async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
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
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json('Order has been deleted')
    } catch (err) {
        res.status(401).json(err)
    }
}

// GET ORDER
const getOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id)
        res.status(200).json(order)
    } catch (err) {
        res.status(401).json(err)
    }
}

// GET USER ORDERS
const getUserOrders = async (req, res) => {
    // const { userId } = req.params
    try {
        const userOrders = await Order.find({
            userId: req.params.userId,
        }).exec()
        res.status(200).json(userOrders)
    } catch (err) {
        res.status(401).json(err)
    }
}

// GET ALL ORDERS
const getAllOrders = async (req, res) => {
    try {
        const allOrders = await Order.find({})
        res.status(200).json(allOrders)
    } catch (err) {
        res.status(401).json(err)
    }
}

// GET INCOME FOR LAST 6 MONTH
const getIncome = async (req, res) => {
    const date = new Date()
    const month = new Date(date.setMonth(date.getMonth() - 5))

    try {
        const income = await Order.aggregate([
            {
                $match: { createdAt: { $gte: month } },
            },
            {
                $project: {
                    month: { $month: '$createdAt' },
                    sales: '$amount',
                },
            },
            {
                $group: {
                    _id: '$month',
                    total: { $sum: '$sales' },
                },
            },
        ])
        res.status(200).json(income)
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
    getIncome,
}
