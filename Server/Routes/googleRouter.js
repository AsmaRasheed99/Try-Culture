const express = require("express");
const router = express.Router();
const userController = require("../controllers/googleController");

router.post("/api/newUserGoogle", userController.newUserGoogle);
router.post("/api/newBusinessGoogle", userController.newBusinessGoogle);


module.exports = router;