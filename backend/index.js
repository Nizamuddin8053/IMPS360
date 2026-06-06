require('dotenv').config();
const express = require("express");
const connectDB = require("./config/database");
const app = express();
const PORT = process.env.PORT || 3000;



app.use(express.json());

// all routes

// database connection
connectDB();

app.listen(PORT, ()=>{
    console.log(`app is smoothly running on ${PORT}`);
})