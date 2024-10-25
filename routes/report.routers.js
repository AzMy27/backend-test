const express = require("express");
const router = express.Router();
const ReportController = require("../controllers/report.controlers");
const upload = require("../config/multer");
const wrapAsync = require("../utils/wrapAsync");

router
  .route("/")
  .get(wrapAsync(ReportController.index))
  .post(upload.array("images", 5), wrapAsync(ReportController.store));

module.exports = router;
