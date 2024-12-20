const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const ejsMate = require("ejs-mate");
const path = require("path");
const ReportRouters = require("./routes/report.routers");
const flash = require("connect-flash");

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(flash());

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("home");
});

app.use("/reports", ReportRouters);
module.exports = app;
