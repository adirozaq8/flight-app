const apCodes = require("airport-codes").toJSON();
const mongoose = require("mongoose");
let Airport = {};
// const airportSchema = {
//     type: String,
//   },
//   airportModel = {};

//test apCodes
// const targCity = "bristol";
// const cityRes = [];

// converts letter case to lower with each word capitalized
// apCodes.map((apCode) => {
//   if (apCode.city.toLowerCase() === targCity.toLowerCase()) {
//     let tempSplit = apCode.city.split(" ");
//     tempSplit.forEach((el, idx) => {
//       el = el.charAt(0).toUpperCase() + el.toLowerCase().slice(1, el.length);
//       tempSplit[idx] = el;
//     });
//     apCode.city = tempSplit.join(" ");
//     cityRes.push(apCode);
//   }
// });
// console.log(cityRes);

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
            // converts letter case to lower with each word capitalized
            let tempSplit = apCode.city.split(" ");
            tempSplit.forEach((el, idx) => {
              el =
                el.charAt(0).toUpperCase() +
                el.toLowerCase().slice(1, el.length);
              tempSplit[idx] = el;
            });
            apCode.city = tempSplit.join(" ");
            let airport = new Airport(apCode);
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
