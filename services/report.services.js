const ReportModel = require("../model/report.model");

class ReportServices {
  static async createReport(title, date, place, description, images) {
    const createReport = new ReportModel({ title, date, place, description, images });
    return await createReport.save();
  }
}
module.exports = ReportServices;
