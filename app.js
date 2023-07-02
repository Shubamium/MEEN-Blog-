// Dependencies
const express = require("express");
const morgan = require("morgan");
const app = express();
const bodyParser = require("body-parser");

// Middleware
app.set("view engine", "ejs");
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Controller
const blogRoutes = require("./routes/blog");
const indexRoutes = require("./routes/index");
const { connect } = require("./models/db");

// Start the server
connect(() => {
  app.listen(3100, () => {
    console.log("Server Started at port 3100");
  });
});

app.use(indexRoutes);
app.use("/blog", blogRoutes);

app.use((req, res) => {
  res.render("404");
});
