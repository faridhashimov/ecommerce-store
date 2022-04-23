const mongoose = require('mongoose')
const colors = require('colors')

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(
            `Database connected on adress ${conn.connection.host}`.cyan
                .underline
        )
    } catch (error) {
        console.log(error)
    }
}

module.exports = dbConnect
