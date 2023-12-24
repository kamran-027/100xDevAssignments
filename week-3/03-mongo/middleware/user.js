const { User } = require("../db/index");

async function userMiddleware(req, res, next) {
  const userDetails = {
    username: req.headers.username,
    password: req.headers.password,
  };

  req.userDetails = userDetails;

  const isUser = await User.exists(userDetails);

  if (isUser) {
    next();
  } else {
    return res.status(404).json({ err: "Not a valid User" });
  }
}

module.exports = userMiddleware;
