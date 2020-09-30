const express = require("express");
const router = express.Router();
const {
  flightOffers,
  getAirports,
  getTestFunc,
} = require("../handlers/airport");

router.post("/getairports", getAirports);
router.post("/flightoffers", flightOffers);

module.exports = router;
