const express = require("express");
const router = express.Router();
const MessageController = require("../controllers/messagesController")

router.post("/api/AddMessage", MessageController.AddMessage);
router.get("/api/getAllMessages/:conversationId", MessageController.getAllMessages);


module.exports = router;