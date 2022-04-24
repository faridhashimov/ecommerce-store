const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, default: false },
        img: { type: String, default: '' },
    },
    { timestamps: true }
)

module.exports = new mongoose.model('User', UserSchema)
