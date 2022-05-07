const Order = require('../models/OrderModel')

const createOrder = async (req, res) => {
    try {
        const newOrder = await Order.create(req.body)
        res.status(401).json(newOrder)
    } catch (err) {
        res.status(401).json(err)
    }
}
const updateOrder = async (req, res) => {
    try {
        const newOrder = await Order.create(req.body)
        res.status(401).json(newOrder)
    } catch (err) {
        res.status(401).json(err)
    }
}
const deleteOrder = async (req, res) => {
    try {
        const newOrder = await Order.create(req.body)
        res.status(401).json(newOrder)
    } catch (err) {
        res.status(401).json(err)
    }
}
const getOrder = async (req, res) => {
    try {
        const newOrder = await Order.create(req.body)
        res.status(401).json(newOrder)
    } catch (err) {
        res.status(401).json(err)
    }
}
const getAllOrders = async (req, res) => {
    try {
        const newOrder = await Order.create(req.body)
        res.status(401).json(newOrder)
    } catch (err) {
        res.status(401).json(err)
    }
}

module.exports = {
    createOrder,
    updateOrder,
    deleteOrder,
    getOrder,
    getAllOrders,
}
