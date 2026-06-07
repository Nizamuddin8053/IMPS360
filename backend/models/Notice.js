const mongoose = require("mongoose");

const Notice = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    category: {
        type: String,    // academic | examination | admission | holiday | event | emergency
    },
    targetAudience: [String], // ["Student"], ["Parent"], ["Faculty"], ["Student", "Parent"], ["ALL"]

    priority: {
        type: String, // low, medium, high
    },
    attachment: {
        fileName: String,
        fileUrl: String,
    },
    publishDate: {
        type: Date,
    },
    expiryDate: {
        type: Date,
    },
    status: {
        type: String,  // active, expired, draft
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,  // admin id in user 
        ref: "User",   
    },
    isPinned: {
        type: Boolean,  // pin notice at top
    },
});

module.exports = mongoose.model("Notice", Notice);