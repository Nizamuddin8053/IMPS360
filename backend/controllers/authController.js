const User = require("../models/User");
const Student = require("../models/Student");
const Parent = require("../models/Parent");
const Faculty = require("../models/Faculty");
const TokenBlacklist = require("../models/TokenBlacklist");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const sendEmail = require('../utils/sendEmail');


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


// forgot password
// send password reset link
exports.forgotPassword = async (req, res)=>{
    try{
        const {identifier} = req.body;

        if(!identifier){
            return res.status(400).json({
                success: false,
                message: "please provide a valid username"
            })
        }

        const user = await User.findOne({
            $or: [
                {userId: identifier.toLowerCase().trim},
                {email: identifier.toLowerCase().trim}
            ]

        })


        if(!user){
            return res.status(200).json({
                success: true,
                message: "If account exist with given identifier, password reset link sent"
            })
        }

        if(!user.isActive){
            return res.status(403).json({
                success: false,
                message: "This account is restricted, contact admin"
            })
        }

        // generate a unhashed random row token
        const rowToken = crypto.randomBytes(32).toString('hex');

        // hash token

        const hashedToken = crypto.createHash("sha256").update(rowToken).digest('hex');

        user.forgotPasswordToken = hashedToken;
        // 15 minute expiry
        user.forgotPasswordExpiry = Date.now()+ 15*60*1000;

        await user.save();

        const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${rawToken}`;

        // Compose HTML Email Content
        const emailContent = `
            <h1>Password Reset Request</h1>
            <p>You requested a password reset. Click the link below to change your password. This link expires in 15 minutes.</p>
            <a href="${resetUrl}" clicktracking=off target="_blank">${resetUrl}</a>
            <p>If you did not request this, please ignore this email.</p>
        `;


        await sendEmail({
            email: user.email,
            subject: "Password reset link",
            message: emailContent
        });

        return res.status(200).json({
            succss: true,
            message: "If account exist with given identifier, password reset link sent",

        })


    }catch(error){

        console.log("error while sending password reset link")
        return res.status(500).json({
            success: false,
            message: "internal server error while sending password reset link",
            error: error.message
        })

    }
}

// reset user password using token
// fetch token from url

exports.resetPassword = async (req, res)=>{
    try{
        const {token} = req.params;
        const {newPassword} = req.body;

        if(!newPassword || newPassword.length<6){
            return res.status(400).json({
                success: false,
                message: "Password must be at least 6 characters long."
            })
        }

        // create hashed token

        const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

        // match stored hashed token with hashedtoken

        const user = await User.findOne({
            forgotPasswordToken: hashedToken, // check both hashedToken are same
            forgotPasswordExpiry: {$gt: Date.now()}  // expiration time still greater then current time because I stored 15 minute late

        });

        if(!user){
            return res.status(400).json({
                success: false,
                message: "Password reset token is invalid or has expired."
            })
        }

        // save new password by encrypting

        const salt = bcrypt.genSalt(10);
        user.password = await bcrypt.hash(newPassword, salt);

        // make null forgotPasswordToken and forgotPasswordExpiry

        user.forgotPasswordToken = null;
        user.forgotPasswordExpiry = null;

        await user.save();

        return res.status(200).json({
            success: true,
            message: "Password reset successful! You can now log into your account."
        })


    }catch(error){
        console.log("password reset error", error);
        return res.status(500).json({
            success:false,
            message: "internal server error",
            error: error.message
        })
    }
}


// getCurrent user

exports.getCurrentUser = async (req, res)=>{
    try{

        if(!req.user){
            return res.status(401).json({
                success: false,
                message:  "Unauthorized access. No valid user session found."
            })
        }

        const currentUser = await User.findById(req.user._id).select('-password');

        if(!currentUser){
            return res.status(404).json({
                success: false,
                message: "User account no longer exists in the system."
            })
        }

        return res.status(200).json({
            success: true,
            data: currentUser
        })
        
    }catch(error){

        console.log("error while fetching current user", error);
        return res.status(500).json({
            success: false,
            message: "internal server error",
            error: error.message
        })

    }
}





