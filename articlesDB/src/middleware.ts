const jwt = require("jsonwebtoken");
const { resError, resData } = require("./tools/helpers.tools");

export let defaultMiddleware = (req, res, next) => {
  let headers = req.headers;
  if (headers.user == 1) next();
  return res.json("not authorized");
};

export let notFound = (req, res, next) => {
  res.statusCode = 404;
  return res.json("404 not found");
};

//authorization with jwt
export let auth = (req, res, next) => {
  //get token from req header
  let token = req.headers.authorization;
  console.log(token);
  if (!token) resData(res, "token is required");
  //verify toekn with the key
  try {
    jwt.verify(token, "shhhhh");

    resData(res, "Authorized");
    next();
  } catch (e) {
    return resError(res, "token is invalid");
  }

  //if valid next()
  //if not Error
};

// module.exports.defaultMiddleware = defaultMiddleware;
// module.exports.notFound = notFound;
// module.exports.auth = auth;
