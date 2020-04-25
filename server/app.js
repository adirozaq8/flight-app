require("dotenv").config();
// Basic server components
const express = require("express");
// const session = require("express-session");
// const path = require("path");
const cors = require("cors");

// // Server configured components
// const mdb = require("./utils/mdb");
// const system = require("./utils/config").system();
// const mdbStore = mdb.store(system);

// Middleware components
const bodyParser = require("body-parser");
const errorHandler = require("./handlers/error");

// Install flight IATA code table
const iataInstall = require("./handlers/airport");
// Amadeus travel API
const amadeus = require("./controllers/amadeus");
// Express init
const app = express();

// Routes
const authRoutes = require("./routes/auth");

app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);

app.use(function (req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(process.env.PORT, function () {
  console.log(`Server is starting on port ${process.env.PORT}`);
});

// // Setup used components in app
// const appInit = async () => {
//   // MongoDB connection
//   const mdbInit = async () => {
//     await mdb.connect(app, system);
//   };
//   await mdbInit();
//   app.use(express.static(path.join(__dirname, "../client/build"))); // Public folder -- TODO review
//   app.use(express.urlencoded({ extended: false }));
//   app.use(express.json());
//   app.use(bodyParser.json())
//   app.use(
//     session({
//       secret: "1234#changeOnDeploy",
//       resave: false,
//       saveUninitialized: false,
//       cookie: {
//         maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
//       },
//       store: mdbStore
//     })
//   );
//   const routes = require("./routes/routes.js");
//   app.use(routes);
// };

// //Start server
// const serverStart = async () => {
//   await appInit();
// };
// serverStart();
