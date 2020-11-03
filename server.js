const path = require("path");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const { atlasURL, mongoURL } = require("./configs/secrets");
//const connectDB = require("./configs/connectDB");
const userRoute = require("./routes/user.routes");
const storiesRoute = require("./routes/stories.routes");
const { port, environment } = require("./configs/secrets");

const dotenv = require("dotenv");
dotenv.config();

//console.log(environment);
// express instatnce
const app = express();
const PORT = process.env.PORT || 5000;

// express middleware
app.use(express.urlencoded({ extended: false }));
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// database conn
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
    .connect(process.env.MONGO_URL || atlasURL, conn_options)
    .then(() => {
      console.log(`Conected to database ${atlasURL}`);
    })
    .catch((err) => {
      console.log(`Error is:, ${err}`);
    });
};
connectedDB();

// routes
app.use("/api/stories", storiesRoute);
app.use("/api/user", userRoute);

// // Static folder

// // Handle SPA
if (environment === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, console.log(`Server running on port ${PORT}`));
