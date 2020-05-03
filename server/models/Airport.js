const mongoose = require("mongoose");
const apCodes = require("airport-codes").toJSON();

const setAirport = async (apCodes) => {
  // extract airport codes from airport-codes
  apCodesKeys = Object.keys(apCodes);
  schemaObject = {};
  apCodesKeys.forEach((key) => {
    schemaObject[key] = { type: String };
  });

  // create mongoose schema from airport codes
  const airportSchema = new mongoose.Schema(schemaObject);
  exports.Airport = mongoose.model("Airport", airportSchema, "airports");
};

const setAirportSource = async () => {
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
          const apCodes = require("airport-codes").toJSON();
          setAirport(apCodes[0]);
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
        } else {
          // creates Airport schema from mongodb collection
          const AirportSetSchema = mongoose.model(
            "AirportSet",
            new mongoose.Schema(),
            "airports"
          );
          AirportSetSchema.findOne({})
            .then((res) => {
              return res;
            })
            .then((data) => setAirport(data.toObject()));
        }
      });
    });
  } catch (err) {
    console.log(err);
  }
};
setAirportSource();
//setAirport(apCodes);
