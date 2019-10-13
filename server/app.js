// Basic server components
const express = require("express");
const session = require("express-session");

// Server configured components
const mdb = require("./utils/mdb");
const system = require("./utils/config").system();
const mdbStore = mdb.store(system);

// Express init
const app = express();

// MongoDB connection
const mdbInit = async () => {
  await mdb.connect(app, system);
};

// Setup used components in app
const appInit = async () => {
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(
    session({
      secret: "1234#changeOnDeploy",
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
      },
      store: mdbStore
    })
  );
};

//Start server
const serverStart = async () => {
  await mdbInit();
  appInit();
};
serverStart();
