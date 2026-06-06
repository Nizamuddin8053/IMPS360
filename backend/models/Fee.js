const mongoose = require("mongoose");

const Fee = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    month: {
        type: String,
        enum: ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"],
    },
    amount: {
        type: Number,
    },
    status: {
        type: String,
        enum: ["PAID", "PENDING"],
    },
    paymentDate: {
        type: Date,
    }

});

module.exports = mongoose.model("Fee", Fee);