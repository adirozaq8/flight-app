const db = require("../models")
const jwt = require("jsonwebtoken")

exports.login = async function(req, res, next) {
  try {
    let user = await db.User.findOne({
      email: req.body.email
    });
    let { id, username, avatar } = user;
      let isMatch = await user.comparePassword(req.body.password);
      if (isMatch) {
        let token = jwt.sign(
          {
            id,
            username,
            avatar
          },
          process.env.SECRET_KEY
        );
        return res.status(200).json({
          id,
          username,
          avatar,
          token
        });
      } else {
        return next({
          status: 400,
          message: "Invalid Email/Password."
        });
      }
  } catch(e) {
    return next({ status: 400, message: "Invalid Email/Password." });
  }
}

exports.register = async function(req, res, next) {
  try {
    let user = await db.User.create(req.body)
    let {id, username, avatar} = user
    let token = jwt.sign({
      id,
      username,
      avatar
    },
    process.env.SECRET_KEY
  );
  return res.status(200).json({
    id,
    username,
    avatar,
    token
  })
  } catch(err) {
    // If validation fails
    if(err.code === 11000){
      err.message = "Sorry, that username and/or email is taken"
    }
    return next({
      status: 400,
      message: err.message
    })
  }
}