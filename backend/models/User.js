const mongoose = require("mongoose");


const User = new mongoose.Schema(
    {
        username: {
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
        }
    }
)

module.exports = mongoose.model("User", User);