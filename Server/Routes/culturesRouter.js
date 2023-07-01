const express = require("express");
const router = express.Router();

const culturesController = require("../controllers/culturesController");
const protected =require("../middleware/Protected")
const { upload } = require('../middleware/uploadMiddleware');

router.get("/api/getAllCultures", culturesController.getAllCultures);
router.get("/api/oneCulture/:country", culturesController.oneCulture);
router.post("/api/AddNewCulture", upload, culturesController.AddNewCulture);
router.put("/api/updateCulture/:id", upload, culturesController.updateCulture);




module.exports = router;