const db = require("../config/db");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const reportSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  images: {
    type: Buffer,
    required: true,
  },
  // images: [
  //   {
  //     url: String,
  //     filename: String,
  //   },
  // ],
});

// module.exports = mongoose.model("Report", reportSchema);
const ReportModel = db.model("Report", reportSchema);
module.exports = ReportModel;
