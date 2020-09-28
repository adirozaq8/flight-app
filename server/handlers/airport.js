const db = require("../models");
const mongoose = require("mongoose");

// for later use/interaction with the airports collection
exports.flightOffers = async function (req, res, next) {
  try {
    const reqAirport = await db.Airport.findOne({ city: req.body.from });
    return res.status(200).json({
      reqAirport,
    });
  } catch (e) {
    return next({ status: 400, message: "Invalid request." });
  }
};
exports.getAirports = async function (req, res, next) {
  try {
    const reqAirport = await db.Airport.find({}).sort({ city: "" });
    return res.status(200).json({ reqAirport });
  } catch (e) {
    console.log(e);
    return next({ status: 400, message: "Invalid request." });
  }
};
