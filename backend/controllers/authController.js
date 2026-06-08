const User = require("../models/User");
const Student = require("../models/Student");
const Parent = require("../models/Parent");
const Faculty = require("../models/Faculty");
const TokenBlacklist = require("../models/TokenBlacklist");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


// login into system

exports.login = async (req, res)=>{
    try{
        const {identifier, password} = req.body;

        if(!identifier || !password){
            return res.status(400).json({
                success: false,
                message: "fill all details",
            })
        }

        const user = await User.findOne({
            $or: [  // check anyone match
                {email: identifier.trim()},
                {userId: identifier.trim()}
            ]

        });

        if(!user){
            return res.status(401).json({
                success: false,
                message: "invalid username/email"
            })
        }

        if(!user.isActive){
            return res.status(403).json({
                success: false,
                message: "Your account is inActive , please contact the administration to active it"
            })
        }

        // check password match

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(401).json({
                success: false,
                message: "password wrong"
            })
        }

        // fetch profile data based on role

        const profileDetails = null;

        if(user.role === "ADMIN"){
            profileDetails = { message: "Administrative Portal Access Granted" };

        }else if(user.role === "STUDENT"){
            profileDetails = await Student.findOne({userId: user._id}).populate("parentId");

            if(profileDetails && ["SUSPENDED", "LEFT"].includes(profileDetails.status)){
                return res.status(403).json({
                    success: false,
                    message: `Access denied. Your student profile status is currently: ${profileDetails.status}`
                })
            }
        }else if(user.role === "PARENT"){
            profileDetails = await Parent.findOne({userId: user._id}).populate("children");
        }else if(user.role === "FACULTY"){
            profileDetails = await Faculty.findOne({userId: user._id});
        }


        // generate jwt token

        const token = jwt.sign(
            {id: user._id, role: user.role},
            process.env.JWT_SECRET,
            {expiresIn:"1d"}
        )

        user.password = undefined;

        return res.status(200).json({
            success: true,
            message: `Welcome back , ${user.role}`,
            token,
            user,
            profile: profileDetails
        })


    }catch(error){

        console.log("error while login", error);
        return res.status(500).json({
            success: false,
            message: "internal server error",
            error: error.message
        })

    }
}

// logout
exports.logout = async (req, res) => {
    try {
        let token = null;

        // 1. Extract token from Header or Cookie
        if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
            token = req.headers.authorization.split(" ")[1];
        } else if (req.cookies && req.cookies.token) {
            token = req.cookies.token;
        }

        // If no token is provided, they are already effectively logged out
        if (!token) {
            return res.status(200).json({
                success: true,
                message: "Logged out successfully"
            });
        }

        try {
            // 2. Decode token to find its exact expiration timestamp ('exp')
            const decoded = jwt.decode(token);
            
            if (decoded && decoded.exp) {
                // Convert the JWT exp timestamp (seconds) into a JavaScript Date Object (milliseconds)
                const expiryDate = new Date(decoded.exp * 1000);

                // 3. Save to Blacklist database
                await TokenBlacklist.create({
                    token: token,
                    expiresAt: expiryDate
                });
            }
        } catch (jwtError) {
            // If the token is structurally malformed or tampered with, skip blacklisting it
            console.error("JWT Decode failed during logout:", jwtError.message);
        }

        // 4. Clean up frontend footprint (Optional: if you used cookies)
        if (req.cookies && req.cookies.token) {
            res.clearCookie("token", { httpOnly: true, secure: true, sameSite: "strict" });
        }

        return res.status(200).json({
            success: true,
            message: "Session invalidated safely. Logout complete."
        });

    } catch (error) {
        console.error("Critical error in secure logout workflow:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error during logout processing",
            error: error.message
        });
    }
};




