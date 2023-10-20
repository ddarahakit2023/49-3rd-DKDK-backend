const jwt = require("jsonwebtoken");
const { throwError } = require("../utils");
const { SECRET } = process.env;

const validateToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const { id } = jwt.verify(token, SECRET);
    if (!token) {
      throwError(401, "ACCESS_TOKEN_REQUIRED");
    }
    req.userId = id;
    next();
  } catch (error) {
    error.status = error.status || 400;
    //error.message = error.message.toUpperCase().replaceAll(" ", "_");
    error.message = error.message.toUpperCase().replace(/ /g, "_");
    next(error);
  }
};

module.exports = { validateToken };
