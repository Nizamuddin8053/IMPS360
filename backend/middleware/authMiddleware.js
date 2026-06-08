
const jwt = require("jsonwebtoken");
const TokenBlacklist = require("../models/TokenBlacklist");
const User = require("../models/User");

exports.isAuthenticated = async (req, res, next) => {
    try {
        let token = null;

        if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
            token = req.headers.authorization.split(" ")[1];
        } else if (req.cookies && req.cookies.token) {
            token = req.cookies.token;
        }

        if (!token) {
            return res.status(401).json({ success: false, message: "Access denied. Token missing." });
        }

        // THE CRITICAL ADVANCED SECURITY CHECK 
        // Check if this token is currently hanging out in the Blacklist database
        const isBlacklisted = await TokenBlacklist.findOne({ token });
        if (isBlacklisted) {
            return res.status(401).json({
                success: false,
                message: "Session expired or logged out. Please authenticate again."
            });
        }

        // Verify validity of the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Attach the user info to the request stream
        req.user = await User.findById(decoded.id).select("-password");
        
        next(); // Proceed cleanly to the requested controller route
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Session invalid or expired",
            error: error.message
        });
    }
};