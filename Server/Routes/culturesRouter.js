const express = require("express");
const router = express.Router();

const culturesController = require("../controllers/culturesController");
const protected =require("../middleware/Protected")


router.get("/api/getAllCultures", culturesController.getAllCultures);
router.get("/api/oneCulture/:country", culturesController.oneCulture);
router.post("/api/AddNewCulture", culturesController.AddNewCulture);
router.put("/api/updateCulture/:id", culturesController.updateCulture);




module.exports = router;