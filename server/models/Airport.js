const apCodes = require("airport-codes").toJSON();
const mongoose = require("mongoose");
const codes = apCodes;

const Airport = (mongoose) => {
  // extract airport codes from airport-codes
  codesKeys = Object.keys(codes[0]);
  schemaObject = {};
  codesKeys.forEach((key) => {
    schemaObject[key] = { type: String };
  });

  // create mongoose schema from airport codes
  const airportSchema = new mongoose.Schema(schemaObject);
  const airportModel = mongoose.model("Airport", airportSchema, "airports");

  try {
    mongoose.connection.on("open", function (ref) {
      //trying to get collection names
      mongoose.connection.db.listCollections().toArray(function (err, names) {
        //console.log(names); // [{ name: 'dbname.myCollection' }]
        airportsExists = false;
        names.forEach((name) => {
          if (name.name === "airports") airportsExists = true;
        });
        // Creates the airports collection from airport-codes if it does not exist
        if (airportsExists === false) {
          codes.forEach((code) => {
            let airport = new airportModel(code);
            airport.save((err, ap) => {
              if (err) return console.log(err);
              console.log(airport.name + " saved to database");
            });
          });
        }
      });
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = Airport;
