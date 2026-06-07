const mongoose = require("mongoose");

const Event = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
        enum: ["ACADEMIC", "SPORTS", "CULTURAL", "OTHER"],
    },
    enentDate: {
        type: Date,
    },
    startTime: {
        type: String,
    },
    endTime: {
        type: String,
    },
    venue: {
        type: String,
    },
    bannerImage: {
        type: String,
    },
    organizer: {
        type: String,
    },
    participants: [
       {
        type:  mongoose.Schema.Types.ObjectId,
        ref: "Student",
       },
    
    ],
    status: {
        type: String,
        enum: ["UPCOMING", "ONGOING", "COMPLETED"],
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,   // admin id
        ref: "User",  
    },
    createdAt: {
        type: Date,
    },
    updatedAt: {
        type: Date,
    },

});


module.exports = mongoose.model("Event", Event);