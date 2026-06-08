const mongoose = require("mongoose");

const TokenBlacklistSchema = new mongoose.Schema(
    {
        token: {
            type: String,
            required: true,
            unique: true,
            index: true // Indexed for rapid querying during API calls
        },
        expiresAt: {
            type: Date,
            required: true,
            // 0 means MongoDB evaluates the exact Date value inside 'expiresAt' 
            // and drops the document the second that specific clock time passes.
            expires: 0 
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("TokenBlacklist", TokenBlacklistSchema);