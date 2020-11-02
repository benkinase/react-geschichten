const jwt = require("jsonwebtoken");
const { secretKey } = require("../configs/secrets");

const getToken = (user) => {
  return jwt.sign(
    {
      userId: user._id,
      username: user.username,
      email: user.email,
    },
    secretKey,
    {
      expiresIn: "48h",
    }
  );
};

// Authorization
const isAuth = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    const tokenOnly = token.slice(7, token.length);
    jwt.verify(tokenOnly, secretKey, (err, decode) => {
      if (err) {
        return res.status(401).send({ message: "Invalid token" });
      }
      req.user = decode;
      next();
      return;
    });
  } else {
    return res.status(401).send({ message: "Token not provided" });
  }
};

// set admin
const isAdmin = (req, res, next) => {
  console.log(req.user);
  if (req.user && req.user.isAdmin) {
    return next();
  }
  return res.status(401).send({ message: "Admin Token is not valid." });
};

// set guest***
const ensureGuest = (req, res, next) => {
  if (req.user) {
    return next();
  } else {
    return res.status(401).send({ message: "Access denied" });
  }
};

module.exports = { getToken, isAuth, isAdmin, ensureGuest };
