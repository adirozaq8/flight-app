const express = require("express");
const router = express.Router();
const { flightOffers } = require("../handlers/airport");

router.post("/flightoffers", flightOffers);

module.exports = router;
