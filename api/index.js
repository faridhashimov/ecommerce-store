const express = require('express')
const dotenv = require('dotenv')
const dbConnect = require('./config/dbConfig')
const userRoute = require('./routes/userRoute')
dotenv.config()

const port = process.env.PORT

const app = express()

dbConnect()

app.use(express.json())
app.use('/api/users', userRoute)

app.listen(port, () => {
    console.log(`Starting server on port ${port}`)
})
