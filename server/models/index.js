const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGO_URI, {
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports.Airport = require("./Airport")(mongoose);
module.exports.User = require("./user");
