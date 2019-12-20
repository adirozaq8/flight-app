const mongodb = require("mongodb");
const mongoose = require("mongoose");
const session = require("express-session");
const mdbStore = require("connect-mongodb-session")(session);
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;

const connect = async (app, system) => {
  return new Promise(async (resolve, reject) => {
    if (system.useMongoose) {
      mongoose
        .connect(system.mdb.con, {
          useNewUrlParser: true,
          useCreateIndex: true,
          useFindAndModify: false,
          useUnifiedTopology: true
        })
        .then(client => {
          if (app)
            app.listen(
              system.port,
              console.log(`listening on port: ${system.port} with Mongoose`)
            );
          dbm = client;
          resolve((exports.dbm = dbm));
        })
        .catch(err => {
          if (err) throw err;
        });
    } else {
      MongoClient.connect(
        system.mdb.con,
        { useNewUrlParser: true, useUnifiedTopology: true },
        (err, client) => {
          if (err) throw err;
          if (app)
            app.listen(
              system.port,
              console.log(`listening on port: ${system.port} with mDB`)
            );
          db = client.db();
          resolve((exports.db = db));
        }
      );
    }
  });
};

const store = system => {
  const store = new mdbStore({
    uri: system.mdb.con,
    collection: system.mdb.col.session,
    clear_interval: 3600
  });
  return store;
};

exports.connect = connect;
exports.store = store;
