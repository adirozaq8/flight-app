const express = require("express");
const path = require("path");
const userController = require("../controllers/userController");
const router = express.Router();

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
router.post("/login", userController.login);
router.post("/register", userController.register);

module.exports = router;
