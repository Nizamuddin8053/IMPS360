const mongoose = require("mongoose");

const Attendance = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
    },
    class: {
        type: String,
    },
    date: {
        type: Date,
    },
    status: {
        type: String,
        enum: ["ABSENT", "PRESENT"],
        default: "ABSENT",
    }
});

module.exports = mongoose.model("Attendance", Attendance);