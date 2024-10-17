const ReportModel = require("../model/report.model");

class ReportServices {
  static async createReport(title, date, images) {
    const createReport = new ReportModel({ title, date, images });
    return await createReport.save();
  }
}
module.exports = ReportServices;
