// Dependencies
const express = require("express");
const morgan = require("morgan");
const app = express();

// Middleware
app.set("view engine", "ejs");
app.use(morgan("dev"));
app.use(express.static("public"));

// Controller
const blogRoutes = require("./routes/blog");
const indexRoutes = require("./routes/index");

// Start the server
app.listen(3000, () => {
  console.log("Server Started at port 3000");
});

app.use(indexRoutes);
app.use("/blog", blogRoutes);

app.use((req, res) => {
  res.render("404");
});
