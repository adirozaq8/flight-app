const Amadeus = require("amadeus");
const airports = require("airport-codes");
const codes = require("airport-codes").toJSON();

const amadeus = new Amadeus({
  clientId: process.env.AMA_CLIENT,
  clientSecret: process.env.AMA_SECRET,
});

// Test call, NB maximum 2000 a month

// amadeus.shopping.flightOffersSearch
//   .get({
//     originLocationCode: "SYD",
//     destinationLocationCode: "BKK",
//     departureDate: "2020-08-01",
//     adults: "2",
//   })
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (responseError) {
//     console.log(responseError.code);
//   });

//console.log(airports.at(124).get("city"));
//console.log(airports.findWhere({ iata: "LAX" }).get("name"));
//console.log(codes);

// amadeus.shopping.flightOffersSearch
//   .get({
//     originLocationCity: "London",
//     destinationLocationCity: "Bergen",
//     departureDate: "2020-08-01",
//     adults: "2",
//   })
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (responseError) {
//     console.log(responseError.code);
//   });
//console.log(codes[0]);
