const db = require("../models");
const mongoose = require("mongoose");

// for later use/interaction with the airports collection
exports.flightOffers = async function (req, res, next) {
  try {
    console.log(req.body.from);
    const reqAirport = await db.Airport.findOne({ city: req.body.from });
    return res.status(200).json({
      reqAirport,
    });
  } catch (e) {
    return next({ status: 400, message: "Invalid request." });
  }
};
