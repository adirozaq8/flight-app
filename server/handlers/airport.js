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
    city: "Singapore",
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
exports.getAirports = async (req, res, next) => {
  console.log(req.body);
  console.log(!isNaN(req.body.start) && !isNaN(req.body.length));
  let searchKey;
  let reqAirport;
  try {
    if (!req.body.searchKey) {
      searchKey = {
        $or: popularCities,
      };
    } else {
      searchKey = {
        city: new RegExp("^" + req.body.searchKey, "i"),
      };
    }
    if (
      req.body.start !== undefined &&
      req.body.length !== undefined &&
      !isNaN(req.body.start) &&
      !isNaN(req.body.length)
    ) {
      reqAirport = await db.Airport.find(searchKey)
        .skip(req.body.start)
        .limit(req.body.length);
    } else {
      reqAirport = await db.Airport.find(searchKey);
    }
    return res.status(200).json({ reqAirport });
  } catch {
    return next({ status: 400, message: "Invalid request." });
  }
};
