const chatController = require("../controllers/chatController");
const auth = require("../middleware/auth");
const express = require("express");
const router = express.Router();

//routes for chatBot
router.get("/chatBot", auth, chatController().index);

module.exports = router;
