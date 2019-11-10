const User = require("../models/User");

exports.login = function(req, res) {
  let user = new User(req);
  user
    .login()
    .then(function(result) {
      req.session.user = {
        _id: user.body._id,
        avatar: user.avatar,
        username: user.body.username,
        user_attributes: user.body.user_attributes,
        validated: user.body.username,
        admin: user.body.admin,
        sysOp: user.body.sysOp
      };
      req.session.loggedIn = true;
      req.session.save(function() {
        res.redirect("/");
      });
    })
    .catch(function(e) {
      req.flash("errors", e);
      req.session.save(function() {
        console.log("an error occurred");
        res.redirect("/");
      });
    });
};
exports.logout = function(req, res) {
  req.session.destroy(function() {
    res.redirect("/");
  });
};
exports.register = function(req, res) {
  user = new User(req);
  if (req.body.password === req.body.passwordR) {
    user.register();
    res.redirect("/");
  }
};
