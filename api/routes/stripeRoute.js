const router = require("express").Router();
const KEY = process.env.STRIPE_KEY
const stripe = require('stripe')(KEY)

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  const totalSum = Math.round(items
  .reduce((sum, prevValue) => sum + prevValue.total, 0)) * 100

  return totalSum;
};

router.post("/payment", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});


module.exports = router
