const express = require("express");
const router = express.Router();

const ServiceController = require("../controllers/ServiceController");
const protected =require("../middleware/Protected")
const { uploadSingle, uploadMultiple } = require('../middleware/handleImage');

router.post("/api/AddNewBusiness",uploadSingle, ServiceController.AddNewBusiness);
router.get("/api/getAllBusniess", ServiceController.getAllBusniess);
router.get("/api/getOneBusiness/:id", ServiceController.getOneBusiness);
router.get("/api/getBusinessCulture/:culture", ServiceController.getBusinessCulture);
router.put("/api/Subscribed/:id", ServiceController.Subscribed);
router.put("/api/Approve/:id", ServiceController.Approve);
router.put("/api/DeleteBusiness/:id", ServiceController.DeleteBusiness);
router.put("/api/oneUserBusiness/:id", uploadSingle,ServiceController.oneUserBusiness);
router.put("/api/rateBusiness/:id", uploadSingle,ServiceController.rateBusiness);
router.get("/api/allUserServices/:id", ServiceController.allUserServices);
router.get("/api/pendingBusiness", ServiceController.pendingBusiness);
router.get("/api/ApprovedBusiness", ServiceController.ApprovedBusiness);



module.exports = router;