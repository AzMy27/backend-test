const ReportModel = require("../model/report.model");

module.exports.index = async (req, res) => {
  const reports = await ReportModel.find();
  res.json({ status: true, reports });
  res.render("reports/show");
};

module.exports.store = async (req, res) => {
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
};
