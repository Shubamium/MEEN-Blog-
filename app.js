const express = require("express");
const app = express();

// Controller
const blogRoutes = require("./routes/blog");
const morgan = require("morgan");

// Middleware
app.set("view engine", "ejs");
app.use(morgan("dev"));

// Start the server
app.listen(3000, () => {
  console.log("Server Started at port 3000");
});

app.get("/", (req, res) => {
  res.render("index");
});
app.use("/blog", blogRoutes);

app.use((req, res) => {
  //   res.render;
});
