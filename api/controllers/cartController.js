const Cart = require('../models/CartModel')

// CREATE CART
const createCart = async (req, res) => {
    try {
        const newCart = await Cart.create(req.body)
        res.status(200).json(newCart)
    } catch (err) {
        res.status(401).json(err)
    }
}

// UPDATE CART
const updateCart = async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.userId,
            {
                $set: req.body,
            },
            { new: true }
        )
        res.status(200).json(updatedCart)
    } catch (err) {
        res.status(401).json(err)
    }
}

// DELETE CART
const deleteCart = async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.userId)
        res.status(200).json('Cart has been deleted')
    } catch (err) {
        res.status(401).json(err)
    }
}

// GET CART
const getCart = async (req, res) => {
    try {
        const cart = await Cart.findById(req.params.userId)
        res.status(200).json(cart)
    } catch (err) {
        res.status(401).json(err)
    }
}

module.exports = {
    createCart,
    updateCart,
    deleteCart,
    getCart,
}
