const apCodes = require("airport-codes").toJSON();
const mongoose = require("mongoose");
let Airport = {};
// const airportSchema = {
//     type: String,
//   },
//   airportModel = {};

const setAirport = () => {
  // extract airport codes from airport-codes
  apCodesKeys = Object.keys(apCodes[0]);
  schemaObject = {};
  apCodesKeys.forEach((key) => {
    schemaObject[key] = { type: String };
  });

  // create mongoose schema from airport codes
  const airportSchema = new mongoose.Schema(schemaObject);
  Airport = mongoose.model("Airport", airportSchema, "airports");

  //TODO add option to retrieve schema from airports collection if it exists

  try {
    mongoose.connection.on("open", function () {
      // get collection names from database
      mongoose.connection.db.listCollections().toArray(function (err, colList) {
        airportsExists = false;
        colList.forEach((col) => {
          if (col.name === "airports") airportsExists = true;
        });
        // creates the airports collection from airport-codes if it does not exist
        if (airportsExists === false) {
          apCodes.forEach((apCode) => {
            let airport = new airportModel(apCode);
            airport.save((err, ap) => {
              if (err) return console.log(err);
            });
          });
        }
      });
    });
  } catch (err) {
    console.log(err);
  }
};

setAirport();
module.exports = Airport;
