const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const source = process.env.MONGO_URI;

if (!source) {
  console.error(
    "❌ MONGO_URI is not defined. Check your environment variables."
  );
  process.exit(1);
}

const app = express();

// Connect to MongoDB
mongoose.connect(source);

// CORS — allow local dev and Vercel frontend
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      process.env.FRONTEND_URL, // set this in Railway variables
    ],
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Express session
app.use(
  session({
    secret: process.env.SESSION_SECRET || "secret",
    resave: false,
    saveUninitialized: false,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/", require("./routes/index"));
app.use("/api/menu", require("./routes/menu"));
app.use("/api/reservation", require("./routes/reservation"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
