const User = require('../models/UserModel')

const router = require('express').Router()
const KEY = process.env.STRIPE_KEY
const stripe = require('stripe')(KEY)

const calculateOrderAmount = (items) => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    const totalSum =
        Math.round(items.reduce((sum, prevValue) => sum + prevValue.total, 0)) *
        100

    return totalSum
}

router.post('/payment', async (req, res) => {
    const { items, customer, payment } = req.body

    try {
        const user = await User.findById(customer)
        const paymentIntent = await stripe.paymentIntents.create({
            amount: calculateOrderAmount(items),
            currency: 'usd',
            customer: user.userStripeId.id,
            // payment_method: payment.id,
            // off_session: true,
            // confirm: true,
            payment_method: 'pm_card_visa',
            automatic_payment_methods: {
                enabled: true,
            },
        })
        res.send({
            clientSecret: paymentIntent.client_secret,
        })

    } catch (err) {
        console.log('Error code is: ', err.code)
        // const paymentIntentRetrieved = await stripe.paymentIntents.retrieve(err.raw.payment_intent.id);
        // console.log('PI retrieved: ', paymentIntentRetrieved.id);
    }
})

module.exports = router
