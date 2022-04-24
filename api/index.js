const express = require('express')
const dotenv = require('dotenv')
const dbConnect = require('./config/dbConfig')
const cors = require('cors')
const userRoute = require('./routes/userRoute')
const authRoute = require('./routes/authRoute')
dotenv.config()

const port = process.env.PORT

const app = express()

dbConnect()

app.use(express.json())
app.use(cors())
app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)

app.listen(port, () => {
    console.log(`Starting server on port ${port}`)
})
