const mongoose = require("mongoose");

const Student = new mongoose.Schema({

    admissionNo: {
        type: String,
    },
    name: {
        type: String,
    },
    class: {
        type: String,
    },
    section: {
        type: String,
        enum: ["A", "B", "C", "D"],
    },
    dob: {
        type: Date,
    },
    gender: {
        type: String,
        enum: ["MALE", "FEMALE", "TRANSGENDER"]
    },
    parentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Parent",
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    photo: {
        type: String,
    },
    address: {
        type: String,
    },
    phone: {
        type: String,
    }

});

module.exports = mongoose.model("Student", Student);