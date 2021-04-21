const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

// Middleware using app.use
app.use([logger, authorize]);

// ----------------------------------------
// HOme route
app.get("/", logger, (req, res) => {
  res.send("Home");
});

// About route
app.get("/about", logger, (req, res) => {
  res.send("About");
});

// other routes
app.get("/api/products", (req, res) => {
  res.send("products");
});

app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("items");
});

// ------------------------------------------
app.listen(5000, () => {
  console.log("app is listening on port 5000");
});
