const express = require("express");
const router = express.Router();
const upload = require("../middleware/handleImage")

const ServiceController = require("../controllers/ServiceController");
const protected =require("../middleware/Protected")

router.post("/api/AddNewBusiness",upload.single("image"),  ServiceController.AddNewBusiness);
router.get("/api/getAllBusniess", ServiceController.getAllBusniess);
router.get("/api/getOneBusiness/:id", ServiceController.getOneBusiness);
router.get("/api/getBusinessCulture/:culture", ServiceController.getBusinessCulture);
router.put("/api/Subscribed/:id", ServiceController.Subscribed);
router.put("/api/Approve/:id", ServiceController.Approve);
router.put("/api/DeleteBusiness/:id", ServiceController.DeleteBusiness);
router.put("/api/oneUserBusiness/:id",upload.single("image"), ServiceController.oneUserBusiness);
router.get("/api/allUserServices/:id", ServiceController.allUserServices);
router.get("/api/pendingBusiness", ServiceController.pendingBusiness);
router.get("/api/ApprovedBusiness", ServiceController.ApprovedBusiness);
// router.get("/api/averageRating", ServiceController.averageRating);
// router.post("/api/addRate", ServiceController.addRate);




module.exports = router;