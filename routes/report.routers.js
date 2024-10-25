const express = require("express");
const router = express.Router();
const ReportController = require("../controllers/report.controlers");
const upload = require("../config/multer");

router.get("/reports", ReportController.index);
router.post("/reports", upload.array("images", 5), ReportController.store);

module.exports = router;
