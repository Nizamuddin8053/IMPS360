const mongoose = require("mongoose");

const Counter = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    seq: {
        type: Number,
        default: 99,
    },
});

module.exports = mongoose.model("Counter", Counter);