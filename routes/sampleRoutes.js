const express = require("express");
const router = express.Router();
const sampleController = require("../controllers/sampleController");

router.post("/", sampleController.createSample);
router.get("/", sampleController.getSamples);

module.exports = router;
