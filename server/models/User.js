const bcrypt = require("bcrypt");
const validator = require("validator");
const md5 = require("md5");
const settings = require("../utils/config");
const system = settings.system();
let mDb, dbM;
if (typeof db !== "undefined") {
  mDb = require("../utils/mdb").db.collection(system.mdb.col.user);
} else if (typeof dbm !== "undefined") {
  dbM = require("../utils/mdb").dbm;
}
console.log("mDb: ", typeof mDb, "dbM: ", typeof dbM);

let User = function(data, getAvatar) {
  this.data = data;
  this.body = data.body;
  this.errors = [];
  if (getAvatar == undefined) {
    getAvatar = false;
  }
  if (getAvatar) {
    this.getAvatar();
  }
};

User.prototype.getAvatar = function() {
  this.avatar = `https://gravatar.com/avatar/${md5(this.body.email)}?s=128`;
};

User.prototype.cleanUp = function() {
  if (typeof this.body.username != "string") {
    this.body.username = "";
  }
  if (typeof this.body.email != "string") {
    this.body.email = "";
  }
  if (typeof this.body.password != "string") {
    this.body.password = "";
  }
};

User.prototype.fetchAll = function() {
  //TODO add security here!
  return new Promise((resolve, reject) => {
    if (typeof mDb === "object") {
      mDb.find().toArray((err, data) => {
        resolve(data);
      });
    }
  });
};

User.prototype.validate = function() {
  return new Promise(async (resolve, reject) => {
    if (this.body.username == "") {
      this.errors.push("You must provide a username.");
    }
    if (
      this.body.username != "" &&
      !validator.isAlphanumeric(this.body.username)
    ) {
      this.errors.push("Username can only contain letters and numbers.");
    }
    if (!validator.isEmail(this.body.email)) {
      this.errors.push("You must provide a valid email address.");
    }
    if (this.body.password !== this.body.passwordR) {
      this.errors.push("Passwords do not match.");
    }
    if (this.body.password == "") {
      this.errors.push("You must provide a password.");
    }
    if (this.body.password.length > 0 && this.body.password.length < 3) {
      this.errors.push("Password must be at least 12 characters.");
    }
    if (this.body.password.length > 50) {
      this.errors.push("Password cannot exceed 50 characters.");
    }
    if (this.body.username.length > 0 && this.body.username.length < 3) {
      this.errors.push("Username must be at least 3 characters.");
    }
    if (this.body.username.length > 30) {
      this.errors.push("Username cannot exceed 30 characters.");
    }
    if (
      this.body.username.length > 2 &&
      this.body.username.length < 31 &&
      validator.isAlphanumeric(this.body.username)
    ) {
      let usernameExists = await mDb.findOne({
        username: this.body.username
      });
      if (usernameExists) {
        this.errors.push("That username is already taken.");
      }
    }
    if (validator.isEmail(this.body.email)) {
      let emailExists;

      if (typeof mDb === "object") {
        emailExists = await mDb.findOne({
          email: this.body.email
        });
      }
      if (emailExists) {
        this.errors.push("That email is already being used.");
      }
    }
    resolve();
  });
};

User.prototype.login = function() {
  if (typeof mDb === "object") {
    return new Promise((resolve, reject) => {
      this.cleanUp();
      mDb
        .findOne({ username: this.body.username })
        .then(attemptedUser => {
          if (
            attemptedUser &&
            bcrypt.compareSync(this.body.password, attemptedUser.password)
          ) {
            this.body = attemptedUser;
            this.getAvatar();
            resolve("Congrats!");
          } else {
            reject("Invalid username / password.");
          }
        })
        .catch(function() {
          reject("Please try again later.");
        });
    });
  }
};
User.prototype.register = function() {
  return new Promise(async (resolve, reject) => {
    this.cleanUp();
    if (!this.errors.length) {
      let salt = bcrypt.genSaltSync(10);
      this.body.password = bcrypt.hashSync(this.body.password, salt);
      delete this.body.passwordR;
      this.body.reg_date = new Date();
      this.body.user_attributes = {
        ip_addresses: [],
        validated: false,
        admin: false,
        sysOp: false
      };
      this.body.user_attributes.ip_addresses.push(this.data.ip);
      if (mDb === "object") {
        await mDb.insertOne(this.body);
        this.getAvatar();
        console.log("user inserted");
      }
    } else {
      console.log(this.errors);
    }
  })
    .then(() => {
      resolve();
    })
    .catch(() => {
      reject();
    });
};

module.exports = User;
