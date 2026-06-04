const express = require("express");
const router = express.Router();

const uploadPhoto = require("../controllers/Management/uploadphoto");
router.post("/upload", uploadPhoto);

module.exports = router;