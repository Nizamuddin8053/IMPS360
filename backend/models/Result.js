const mongoose = require("mongoose");

const Result = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
    },
    examType: {
        type: String,
        enum: ["WEEKLY", "MONTHLY", "HALF_YEARLY", "PRE_BOARD", "END"]
    },
    subjects : [
        {
            subjectName: {type: String},
            marks: {type: Number},
        },
    ],
    totalMarks: {
        type: mongoose.Schema.Types.Decimal128,
    },
    percentage: {
        type: mongoose.Schema.Types.Decimal128,
    },
    grade: {
        type: mongoose.Schema.Types.Decimal128,
    },

});

module.exports = mongoose.model("Result", Result);