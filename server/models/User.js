const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "You must provide a password."],
    minlength: [8, "Password must be at least 8 characters."],
    maxlength: [50, "Password cannot exceed 50 characters."],
  },
  avatar: {
    type: String,
  },
});

userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) {
      return next();
    }
    let hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    return next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.comparePassword = async function (candidatePassword, next) {
  try {
    let isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
  } catch (err) {
    return next(err);
  }
};

// User.prototype.validate = function() {
//   return new Promise(async (resolve, reject) => {
//     if (
//       this.body.username.length > 2 &&
//       this.body.username.length < 31 &&
//       validator.isAlphanumeric(this.body.username)
//     ) {
//       let usernameExists = await mDb.findOne({
//         username: this.body.username
//       });
//     }
//     if (validator.isEmail(this.body.email)) {
//       let emailExists;

//       if (typeof mDb === "object") {
//         emailExists = await mDb.findOne({
//           email: this.body.email
//         });
//       }
//     }
//     resolve();
//   });
// };

// User.prototype.register = function() {
//   return new Promise(async (resolve, reject) => {
//     this.cleanUp();
//     if (!this.errors.length) {
//       let salt = bcrypt.genSaltSync(10);
//       this.body.password = bcrypt.hashSync(this.body.password, salt);
//       delete this.body.passwordR;
//       this.body.reg_date = new Date();
//       this.body.user_attributes = {
//         ip_addresses: [],
//         validated: false,
//         admin: false,
//         sysOp: false
//       };
//       this.body.user_attributes.ip_addresses.push(this.data.ip);
//       if (mDb === "object") {
//         await mDb.insertOne(this.body);
//         this.getAvatar();
//         console.log("user inserted");
//       }
//     } else {
//       console.log(this.errors);
//     }
//   })
//     .then(() => {
//       resolve();
//     })
//     .catch(() => {
//       reject();
//     });
// };

const User = mongoose.model("User", userSchema);

module.exports = User;
