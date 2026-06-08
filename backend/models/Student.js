const mongoose = require("mongoose");

const Student = new mongoose.Schema({

    admissionNo: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    class: {
        type: String,
        required: true,
        enum: ["NURSERY", "LKG", "UKG", "KG", "1ST", "2ND", "3RD", "4TH", "5TH",
            "6TH", "7TH", "8TH", "9TH", "10TH", "11TH"
        ]
    },
    section: {
        type: String,
        enum: ["A", "B", "C", "D"],
    },
    dob: {
        type: Date,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        enum: ["MALE", "FEMALE", "TRANSGENDER"],
    },
    parentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Parent",
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    photo: {
        type: String,
    },
    address: {
        street: String,
        city: String,
        state: String,
        pincode: String,
    },
    phone: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["ACTIVE", "PROMOTED", "DETAINED", "PASSED_OUT", "SUSPENDED", "LEFT"],
        default: "ACTIVE"
    },
    createdAt: {
        type: Date,
    },

});

module.exports = mongoose.model("Student", Student);