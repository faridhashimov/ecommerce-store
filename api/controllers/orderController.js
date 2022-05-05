const Order = require('../models/OrderModel')

const createOrder = async (req, res) => {
    try {
        const newOrder = await Order.create(req.body)
        res.status(401).json(newOrder)
    } catch (err) {
        res.status(401).json(err)
    }
}
const updateOrder = async (req, res) => {}
const deleteOrder = async (req, res) => {}
const getOrder = async (req, res) => {}
const getAllOrders = async (req, res) => {}

module.exports = {
    createOrder,
    updateOrder,
    deleteOrder,
    getOrder,
    getAllOrders,
}
