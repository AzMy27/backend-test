const ReportModel = require("../model/report.model");

module.exports.index = async (req, res, next) => {
  try {
    const reports = await ReportModel.find();
    res.json({ status: true, reports });
    res.render("reports/show");
  } catch (error) {
    next(error);
  }
};

module.exports.store = async (req, res, next) => {
  try {
    const { title, date, place, description } = req.body;

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ status: false, message: "No files uploaded." });
    }

    const images = req.files.map((file) => file.path);

    let report = await ReportModel.create({
      title,
      date,
      place,
      description,
      images,
    });

    res.status(201).json({ status: true, report });
  } catch (error) {
    next(error);
  }
};
