const mongoose = require("mongoose");

const AirportSchema = (apCodes) => {
  // extract airport codes from airport-codes
  apCodesKeys = Object.keys(apCodes);
  schemaObject = {};
  apCodesKeys.forEach((key) => {
    switch (typeof apCodes[key]) {
      default:
      case "string":
        schemaObject[key] = { type: String };
        break;
      case "object":
        schemaObject[key] = {};
        break;
    }
  });

  // create mongoose schema from airport codes
  const airportSchema = new mongoose.Schema(schemaObject);
  exports.Airport = mongoose.model("Airport", airportSchema, "airports");
  return mongoose.model("Airport", airportSchema, "airports");
};

const setAirportSource = async () => {
  try {
    mongoose.connection.on("open", function () {
      // get collection names from database
      mongoose.connection.db.listCollections().toArray((err, colList) => {
        airportsExists = false;
        colList.forEach((col) => {
          if (col.name === "airports") airportsExists = true;
        });
        // creates the airports collection from airport-codes if it does not exist
        if (airportsExists === false) {
          const apCodes = require("airport-codes").toJSON();
          const pushKeys = { ...Object.keys(apCodes[0]) };
          const modifyList = (reqAirport) => {
            let tempCities = [];
            const sortedCities = [];
            let i = 0;
            let cityFound = false;

            // Loops through airport-codes and reorganize cities
            // TODO improve the order so the "All airports" inside airport-codes are found first
            reqAirport.map((airport) => {
              // converts letter case to lower with each word capitalized
              let tempSplit = airport.city.split(" ");
              tempSplit.forEach((el, idx) => {
                el =
                  el.charAt(0).toUpperCase() +
                  el.toLowerCase().slice(1, el.length);
                tempSplit[idx] = el;
              });
              airport.city = tempSplit.join(" ");
              cityFound = false;
              if (sortedCities.length > 0) {
                sortedCities.forEach((city) => {
                  if (
                    airport.city.toLowerCase() === city.city.toLowerCase() &&
                    airport.country.toLowerCase() === city.country.toLowerCase()
                  ) {
                    cityFound = true;
                    return;
                  } else {
                    return;
                  }
                });
              } else {
                tempCities.push(airport);
                cityFound = false;
              }
              if (cityFound === false) {
                reqAirport.forEach((reqAir) => {
                  if (
                    reqAir.city === airport.city &&
                    reqAir.country === airport.country
                  ) {
                    tempCities.push(reqAir);
                  }
                });
                const isAllAirports =
                  tempCities.filter((temp) => {
                    temp.name.toLowerCase() === "all airports";
                  }) || [];
                const notAllAirports =
                  tempCities.filter((temp) => {
                    temp.name.toLowerCase() !== "all airports";
                  }) || [];
                if (isAllAirports.length === 0 && tempCities.length > 1) {
                  const pushObject = {};
                  Object.keys(pushKeys).map((el) => {
                    pushObject[pushKeys[el]] = "";
                  });
                  pushObject["name"] = "All Airports";
                  pushObject["city"] = tempCities[0].city;
                  pushObject["country"] = tempCities[0].country;
                  pushObject["airports"] = [...tempCities];
                  sortedCities.push(pushObject);
                } else if (tempCities.length > 1) {
                  isAllAirports.push({ airports: [...notAllAirports] });
                  sortedCities.push(isAllAirports);
                } else {
                  sortedCities.push(...tempCities);
                }
                tempCities = [];
                return;
              }
              i++;
            });
            return sortedCities;
          };
          const apCodesTodb = modifyList(apCodes);
          const Airport = AirportSchema(apCodesTodb[0]);
          Airport.insertMany([...apCodesTodb]);
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
            .then((data) => AirportSchema(data.toObject()));
        }
      });
    });
  } catch (err) {
    console.log(err);
  }
};
setAirportSource();
