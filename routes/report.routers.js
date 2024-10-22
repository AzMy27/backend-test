const express = require("express");
const router = express.Router();
const ReportController = require("../controllers/report.controlers");
const upload = require("../config/multer");

router.post("/reports", upload.single("images"), ReportController.createReport);

module.exports = router;
