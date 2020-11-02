const path = require("path");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./configs/connectDB");
const userRoute = require("./routes/user.routes");
const storiesRoute = require("./routes/stories.routes");
const { port, environment } = require("./configs/secrets");

const dotenv = require("dotenv");
dotenv.config();

// express instatnce
const app = express();

// database conn
connectDB();

// express middleware
app.use(express.urlencoded({ extended: false }));
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// routes
app.use("/api/stories", storiesRoute);
app.use("/api/user", userRoute);

// // Static folder

// // Handle SPA
if (environment == "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = port || 5000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));
