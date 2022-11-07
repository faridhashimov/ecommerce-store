const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const dbConnect = require('./config/dbConfig')
const cors = require('cors')
const userRoute = require('./routes/userRoute')
const authRoute = require('./routes/authRoute')
const productRoute = require('./routes/productRoute')
const orderRoute = require('./routes/orderRoute')
const stripeRoute = require('./routes/stripeRoute')
const path = require('path')

const port = process.env.PORT

const app = express()

/**@type {mongodb.Db} */
dbConnect()

app.use(express.json())
app.use(cors())
app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/products', productRoute)
app.use('/api/orders', orderRoute)
app.use('/api/checkouts', stripeRoute)


// Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../','client', 'build', 'index.html'))
    })
} else {
    app.get('/', (req, res) => {
        res.send('Please set to production!')
    })
}


app.listen(port, () => {
    console.log(`Starting server on port ${port}`)
})
