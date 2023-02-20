const Cart = require('../models/CartModel')

// ADD TO CART
const addToCard = async (req, res) => {
    const { userId } = req.params
    const {
        productId,
        title,
        productSize,
        productColor,
        price,
        quantity,
        img,
        brand,
    } = req.body
    try {
        // check if product with exact paramaeters already exists id db
        const productInCart = await Cart.findOne(
            { userId },
            {
                products: {
                    $elemMatch: {
                        productId,
                        title,
                        productSize,
                        productColor,
                        price,
                    },
                },
            }
        )

        // if not add product to db
        if (!productInCart) {
            const newCart = new Cart({
                userId,
                products: [
                    {
                        productId,
                        title,
                        productSize,
                        productColor,
                        price,
                        quantity,
                        img,
                        brand,
                    },
                ],
            })
            await newCart.save()
            res.status(200).json(newCart)

            // if cart in db exists but empty, then update cart
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

            // if cart in db exists and also exact product exists in this cart, then update product qt with provided in body
        } else {
            await Cart.updateOne(
                {
                    userId,
                    products: {
                        $elemMatch: {
                            productId,
                            title,
                            productSize,
                            productColor,
                            price,
                        },
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
    const { userId, id } = req.params
    const { type } = req.query

    try {
        const us = await Cart.find(
            { products: { $elemMatch: { _id: id } } },
            {
                'products.$': 1,
            }
        )
        const qt = us[0].products[0].quantity

        if (type === 'dec' && qt === 1) {
            return res.status(200).json('Can\'t decrease qunatity')
        }

        await Cart.updateOne(
            {
                userId,
                'products._id': id,
            },
            {
                $inc: {
                    'products.$.quantity': type === 'inc' ? 1 : -1,
                },
            }
        )

        res.status(200).json('Quantity updated')
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
    const { userId, id } = req.params
    try {
        await Cart.updateOne(
            {
                userId,
                products: {
                    $elemMatch: { _id: id },
                },
            },
            {
                $pull: {
                    products: {
                        _id: id,
                    },
                },
            }
        )
        res.status(200).json('Product deleted')
    } catch (err) {
        res.status(401).json(err)
    }
}

// GET CART
const getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId })
        if (cart) {
            return res.status(200).json(cart)
        } else {
            return res.status(200).json([])
        }
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
