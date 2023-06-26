const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");

router.post("/api/NewPayment", paymentController.NewPayment);

module.exports = router;