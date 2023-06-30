const express = require("express");
const router = express.Router();
const ConversationController = require("../controllers/conversationsContoller")

router.post("/api/NewConversation", ConversationController.NewConversation);
router.get("/api/UserConversation/:id", ConversationController.UserConversation);


module.exports = router;