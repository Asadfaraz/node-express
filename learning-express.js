const express = require("express");

const app = express();

// HOme Page
app.get("/", (req, res) => {
  res.status(200).send("Home Page");
  console.log(req.path);
});

// About page
app.get("/about", (req, res) => {
  res.status(200).send("About Page... Welcome!");
  console.log(req.path);
});

// other pages
app.all("*", (req, res) => {
  res.status(404).send("Error! Page not found");
  console.log(req.path);
});

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});

/* Methods to use with Express.js

1- GET
2- POST
3- PUT
4- DELETE
5- ALL
6- USE
7- LISTEN

*/
