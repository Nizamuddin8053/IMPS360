const mongoose = require("mongoose");


const User = new mongoose.Schema(
    {
        userId: {
            type: String,
            unique: true,
        },
        email: {
            type: String,
            unique: true,
        },
        password: {
            type: String,
        },
        role: {
            type: String,
            enum: ["ADMIN", "STUDENT", "FACULTY", "PARENT"],
        },
        profileImage: {
            type: String,
        },
        isActive: {
            type: Boolean,
            default: false
        },
        forgotPasswordToken: {
            type: String,
            default: null
        },
        forgotPasswordExpiry: {
            type: Date,
            default: null
        },
    }
)

module.exports = mongoose.model("User", User);