const express = require("express");
const router = express.Router();

const ServiceController = require("../controllers/ServiceController");
const protected =require("../middleware/Protected")

router.post("/api/AddNewBusiness", ServiceController.AddNewBusiness);
router.get("/api/getAllBusniess", ServiceController.getAllBusniess);
router.get("/api/getOneBusiness/:id", ServiceController.getOneBusiness);
router.get("/api/getBusinessCulture/:culture", ServiceController.getBusinessCulture);
router.put("/api/Subscribed/:id", ServiceController.Subscribed);
router.put("/api/oneUserBusiness/:id", ServiceController.oneUserBusiness);
router.get("/api/allUserServices/:id", ServiceController.allUserServices);
// router.get("/api/averageRating", ServiceController.averageRating);
// router.post("/api/addRate", ServiceController.addRate);




module.exports = router;