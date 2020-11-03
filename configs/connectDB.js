const mongoose = require("mongoose");
const { mongoURL, atlasURL } = require("./secrets");

const conn_options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

// conn function
const connectedDB = () => {
  mongoose.set("debug", true);
  mongoose
    .connect(atlasURL, conn_options)
    .then(() => {
      console.log(`Conected to database ${atlasURL || mongoURL}`);
    })
    .catch((err) => {
      console.log(`Error is:, ${err}`);
    });
};

module.exports = connectedDB;
