const ReportServices = require("../services/report.services");

exports.createReport = async (req, res, next) => {
  try {
    const { title, date, place, description } = req.body;
    if (!req.file) {
      return res.status(400).json({ status: false, message: "No file uploaded." });
    }
    const images = req.file.path;
    let report = await ReportServices.createReport(title, date, place, description, images);
    res.json({ status: true, success: report });
  } catch (error) {
    next(error);
  }
};
