const express = require("express");
const { products } = require("./data");

const app = express();

// HOme Page
app.get("/", (req, res) => {
  // res.status(200).send("Home Page");
  console.log(req.path);

  // link to product page
  res.send("<h3> Home Page </h3> <a href='/api/products'>Products</a>");
});
// products page
app.get("/api/products/", (req, res) => {
  // res.send(products);
  const newProducts = products.map((product) => {
    const { id, name, image } = product;

    return { id, name, image };
  });
  res.send(newProducts);
});
// Route Params
app.get("/api/products/:productID", (req, res) => {
  // Route parameters in my case productID is like a placeholder where user will provide a value
  const { productID } = req.params;
  const singleProduct = products.find((product) => {
    return product.id == Number(productID);
  });

  // if singleProduct is undefine
  if (!singleProduct) {
    return res
      .status(404)
      .send("<h2>Product not found</h2> <p><a href='/'>Home</a></p>");
  }

  return res.send(singleProduct);
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
