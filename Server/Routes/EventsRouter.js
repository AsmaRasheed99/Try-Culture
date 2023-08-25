const express = require("express");
const router = express.Router();
const EventsController = require("../controllers/EventsController");

router.get("/api/getAllEvents", EventsController.getAllEvents);
router.post("/api/createNewEvent", EventsController.createNewEvent);

module.exports = router;