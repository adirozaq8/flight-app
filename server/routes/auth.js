const express = require("express");
const router = express.Router();
const { register } = require("../handlers/auth")

router.post("/register", register)

module.exports = router;