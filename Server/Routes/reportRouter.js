const express = require("express");
const router = express.Router();
const reportController = require("../controllers/reportController");

router.post("/api/AddNewReport", reportController.AddNewReport);
router.get("/api/getReport", reportController.getReport);
router.get("/api/AllReports", reportController.AllReports);
router.put("/api/UpdateReport/:id", reportController.UpdateReport);
router.post("/api/DeleteReport/:id", reportController.DeleteReport);


module.exports = router;