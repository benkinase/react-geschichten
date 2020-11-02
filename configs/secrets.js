const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  mongoURL: process.env.MONGO_URI,
  secretKey: process.env.ACCESS_TOKEN_SECRET,
  atlasURL: process.env.ATLAS_URI,
  port: process.env.PORT,
  environment: process.env.NODE_ENV,
};
