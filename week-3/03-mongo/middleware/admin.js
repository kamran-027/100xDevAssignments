// Middleware for handling auth
const { Admin } = require("../db/index");

async function adminMiddleware(req, res, next) {
  const adminDetails = {
    username: req.headers.username,
    password: req.headers.password,
  };

  req.adminDetails = adminDetails;

  const isAdmin = await Admin.exists(adminDetails);

  if (isAdmin) {
    next();
  } else {
    return res.status(404).json({ err: "Not a valid Admin" });
  }
}

module.exports = adminMiddleware;
