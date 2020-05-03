const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGO_URI, {
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = require("./Airport");
module.exports.User = require("./user");
