const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        firstName: { type: String },
        lastName: { type: String },
        username: { type: String },
        birthDate: { type: Date },
        phone: { type: String },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, default: false },
        img: { type: String, default: '' },
        adress: {
            city: { type: String },
            street: { type: String },
            zipcode: { type: String },
        },
    },
    { timestamps: true }
)

module.exports = new mongoose.model('User', UserSchema)
