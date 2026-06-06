const mongoose = require("mongoose");

const connectDB = async()=>{
    await mongoose.connect(process.env.MONGO_URL)
    .then(()=>{console.log("mongodb connected successfully")})
    .catch(err=>{console.log("mongodb connection failed", err)})

}

module.exports = connectDB;