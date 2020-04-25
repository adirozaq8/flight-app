const mongoose = require("mongoose")
const bcrypt = require("bcrypt");
// const validator = require("validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String
  }
});

userSchema.pre("save", async function(next) {
  try {
    if(!this.isModified("password")) {
      return next()
    }
    let hashedPassword = await bcrypt.hash(this.password, 10)
    this.password = hashedPassword
    return next()
  } catch(err) {
    return next(err)
  }
})

userSchema.methods.comparePassword = async function(candidatePassword, next){
  try {
    let isMatch = await bcrypt.compare(candidatePassword, this.password)
    return isMatch
  } catch(err) {
    return next(err)
  }
}

// User.prototype.validate = function() {
//   return new Promise(async (resolve, reject) => {
//     if (this.body.username == "") {
//       this.errors.push("You must provide a username.");
//     }
//     if (
//       this.body.username != "" &&
//       !validator.isAlphanumeric(this.body.username)
//     ) {
//       this.errors.push("Username can only contain letters and numbers.");
//     }
//     if (!validator.isEmail(this.body.email)) {
//       this.errors.push("You must provide a valid email address.");
//     }
//     if (this.body.password !== this.body.passwordR) {
//       this.errors.push("Passwords do not match.");
//     }
//     if (this.body.password == "") {
//       this.errors.push("You must provide a password.");
//     }
//     if (this.body.password.length > 0 && this.body.password.length < 3) {
//       this.errors.push("Password must be at least 12 characters.");
//     }
//     if (this.body.password.length > 50) {
//       this.errors.push("Password cannot exceed 50 characters.");
//     }
//     if (this.body.username.length > 0 && this.body.username.length < 3) {
//       this.errors.push("Username must be at least 3 characters.");
//     }
//     if (this.body.username.length > 30) {
//       this.errors.push("Username cannot exceed 30 characters.");
//     }
//     if (
//       this.body.username.length > 2 &&
//       this.body.username.length < 31 &&
//       validator.isAlphanumeric(this.body.username)
//     ) {
//       let usernameExists = await mDb.findOne({
//         username: this.body.username
//       });
//       if (usernameExists) {
//         this.errors.push("That username is already taken.");
//       }
//     }
//     if (validator.isEmail(this.body.email)) {
//       let emailExists;

//       if (typeof mDb === "object") {
//         emailExists = await mDb.findOne({
//           email: this.body.email
//         });
//       }
//       if (emailExists) {
//         this.errors.push("That email is already being used.");
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