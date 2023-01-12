const Cart = require('../models/CartModel')

// ADD TO CART
const addToCard = async (req, res) => {
    const { userId } = req.params
    const { productId, title, size, color, price, quantity } = req.body
    try {
        const productInCart = await Cart.findOne(
            { userId },
            {
                products: {
                    $elemMatch: { productId, title, size, color, price },
                },
            }
        )

        console.log(productInCart === null)
        if (!productInCart) {
            const newCart = new Cart({
                userId,
                products: [
                    {
                        productId,
                        title,
                        size,
                        color,
                        price,
                        quantity,
                    },
                ],
            })
            await newCart.save()
            res.status(200).json(newCart)
        } else if (productInCart.products.length < 1) {
            await Cart.updateOne(
                { userId: userId },
                {
                    $push: {
                        products: req.body,
                    },
                }
            )
            res.status(201).json('Product added into cart')
        } else {
            await Cart.updateOne(
                {
                    userId,
                    products: {
                        $elemMatch: { productId, title, size, color, price },
                    },
                },
                {
                    $inc: {
                        'products.$.quantity': quantity,
                    },
                }
            )
            res.status(201).json('Increase quantity')
        }
    } catch (error) {
        res.status(401).json(err)
    }
}

// UPDATE CART
const updateProductQt = async (req, res) => {
    const { userId, productId } = req.params
    const { type } = req.query

    try {
        await Cart.updateOne(
            {
                userId,
                'products.productId': productId,
            },
            {
                $inc: {
                    'products.$.quantity': type === 'inc' ? 1 : -1,
                },
            }
        )

        res.status(200).json('Product quantity changed!')
    } catch (err) {
        res.status(401).json(err)
    }
}

// DELETE CART
const deleteCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId })
        await Cart.findByIdAndDelete(cart._id)
        res.status(200).json('Cart has been deleted')
    } catch (err) {
        res.status(401).json(err)
    }
}

// DELETE CART
const deleteProductFromCart = async (req, res) => {
    const { userId, productId } = req.params
    try {
        const cart = await Cart.updateOne(
            {
                userId,
                products: {
                    $elemMatch: { productId },
                },
            },
            {
                $pull: {
                    products: {
                        productId,
                    },
                },
            }
        )
        console.log(cart._id)
        await Cart.findByIdAndDelete(cart._id)
        res.status(200).json('Cart has been deleted')
    } catch (err) {
        res.status(401).json(err)
    }
}

// GET CART
const getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId })
        res.status(200).json(cart)
    } catch (err) {
        res.status(401).json(err)
    }
}

// GET ALL CARTS
const getAllCarts = async (req, res) => {
    try {
        const carts = await Cart.find({})
        res.status(200).json(carts)
    } catch (err) {
        console.log(err)
        res.status(401).json(err)
    }
}

module.exports = {
    updateProductQt,
    deleteCart,
    deleteProductFromCart,
    getCart,
    getAllCarts,
    addToCard,
}
