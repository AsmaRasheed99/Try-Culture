const express = require("express");
const router = express.Router();
const EventsController = require("../controllers/EventsController");

router.get("/api/getAllEvents", EventsController.getAllEvents);
// router.get("/api/allUserBlogs/:id", blogController.allUserBlogs);
// router.put("/api/oneUserBlogs/:id", blogController.oneUserBlogs);
router.post("/api/createNewEvent", EventsController.createNewEvent);

module.exports = router;