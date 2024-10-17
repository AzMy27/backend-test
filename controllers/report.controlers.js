const ReportServices = require("../services/report.services");

exports.createReport = async (req, res, next) => {
  try {
    const { title, date } = req.body;
    const images = req.file.path;
    let report = await ReportServices.createReport(title, date, images);
    res.json({ status: true, success: report });
  } catch (error) {
    next(error);
  }
};
