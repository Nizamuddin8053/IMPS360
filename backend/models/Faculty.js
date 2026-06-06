const mongoose = require("mongoose");


const Faculty = new mongoose.Schema({

    facultyId: {
        type: String,
    },
    name: {
        type: String,
    },
    designation: {
        type: String,
    },
    qualification: {
        type: String,
    },
    subjects: [String],
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    photo: {
        type: String,
    }
});

module.exports = mongoose.model("Faculty", Faculty);