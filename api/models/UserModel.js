const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        username: { type: String },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, default: false },
        img: { type: String, default: '' },
        adress: {
            phone: { type: String },
            city: { type: String },
            street: { type: String },
            zipcode: { type: String },
        },
    },
    { timestamps: true }
)

module.exports = new mongoose.model('User', UserSchema)
