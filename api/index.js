const express = require('express')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
dotenv.config()
const dbConnect = require('./config/dbConfig')
const cors = require('cors')
const userRoute = require('./routes/userRoute')
const authRoute = require('./routes/authRoute')
const productRoute = require('./routes/productRoute')
const orderRoute = require('./routes/orderRoute')
const cartRoute = require('./routes/cartRoute')

const port = process.env.PORT

const app = express()

const allowedOrigins = [
    'https://ecommerce-store-fawn.vercel.app',
    'http://localhost:3000',
]

/**@type {mongodb.Db} */
dbConnect()

app.use(
    cors({
        origin: (origin, callback) => {
            if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
                callback(null, true)
            } else {
                callback(new Error('Not allowed by CORS'))
            }
        },
        credentials: true,
        optionsSuccessStatus: 200,
    })
)

app.use(express.json())

app.use(cookieParser())
app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/products', productRoute)
app.use('/api/orders', orderRoute)
app.use('/api/cart', cartRoute)

app.listen(port, () => {
    console.log(`Starting server on port ${port}`)
})
