const dotenv = require("dotenv");
dotenv.config();
// System configuration
exports.system = () => {
  const system = {
    port: process.env.port || 5000,
    listendb: true,
    bstrap4css: true,
    bstrap4js: true,
    usemdb: true,
    mdb: {
      db: process.env.dbname,
      con: process.env.mdbCon,
      col: {
        session: "sessions"
      }
    }
  };
  return system;
};
exports.envVar = () => {
  return process;
};
