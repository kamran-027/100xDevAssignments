const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

async function userMiddleware(req, res, next) {
  let token = req.headers.authorization;

  if (token) {
    token = token.replace(/^Bearer\s+/, "");
    jwt.verify(token, process.env.JWTPass, (err, decoded) => {
      if (err) {
        return res.status(404).json({ err: "Not a valid User" });
      }
      req.userDetails = decoded;
      next();
    });
  } else {
    res.status(404).json({
      err: "Not a valid token",
    });
  }
}

module.exports = userMiddleware;
