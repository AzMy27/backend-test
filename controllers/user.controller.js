const User = require("../model/user.model");

module.exports.logout = (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/dashboard");
  });
};
