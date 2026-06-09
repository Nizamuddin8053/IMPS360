const express = require("express");
const router = express.Router();

const {getCurrentUser} = require("../controllers/authController");
const {isAuthenticated} = require("../middleware/authMiddleware");

router.get("/me", isAuthenticated, getCurrentUser);

module.exports = router;