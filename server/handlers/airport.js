const db = require("../models");
const popularCities = [
  {
    city: "London",
    country: "United Kingdom",
  },
  {
    city: "Bangkok",
    country: "Thailand",
  },
  {
    city: "Paris",
    country: "France",
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
  },
  {
    city: "Istanbul",
    country: "Turkey",
  },
  {
    city: "New York",
    country: "United States",
  },
  {
    city: "Singapore City",
    country: "Singapore",
  },
  {
    city: "Kuala Lumpur",
    country: "Malaysia",
  },
  {
    city: "Seoul",
    country: "South Korea",
  },
  {
    city: "Hong Kong",
    country: "China",
  },
  {
    city: "Tokyo",
    country: "Japan",
  },
  {
    city: "Barcelona",
    country: "Spain",
  },
  {
    city: "Amsterdam",
    country: "Netherlands",
  },
  {
    city: "Rome",
    country: "Italy",
  },
  {
    city: "Milan",
    country: "Italy",
  },
];
// for later use/interaction with the airports collection
exports.flightOffers = async (req, res, next) => {
  try {
    const reqAirport = await db.Airport.findOne({ city: req.body.from });
    return res.status(200).json({
      reqAirport,
    });
  } catch {
    return next({ status: 400, message: "Invalid request." });
  }
};
exports.getAirports = async = async (req, res, next) => {
  try {
    const reqAirport = await db.Airport.find({
      $or: popularCities,
    });
    return res.status(200).json({ reqAirport });
  } catch {
    return next({ status: 400, message: "Invalid request." });
  }
};
