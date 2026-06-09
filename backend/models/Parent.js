const mongoose = require("mongoose");

const Parent = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    fatherName: {
        type: String,
    },
    motherName: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    alternativePhone: {
        type: String,
    },
    occupation: {
        type: String,
    },
    address: {
        street: String,
        city: String,
        state: String,
        pincode: String,
    },
    children: [
        { // todo: later array of students will store optimize storage(delete student will change many controllers will change)
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student",
        },
    ],
    emergencyContact: {
        type: String,
    },
    createdAt: {
        type: Date,
    },
    updatedAt: {
        type: Date,
    },
});

module.exports = mongoose.model("Parent", Parent);