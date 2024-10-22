const db = require("../config/db");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const reportSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
});

// module.exports = mongoose.model("Report", reportSchema);
const ReportModel = db.model("Report", reportSchema);
module.exports = ReportModel;
