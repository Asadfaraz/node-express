const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user == "jon") {
    req.user = { name: "jon", id: "3" };
    console.log("authorize");
    next();
  } else {
    console.log("unauthorized");
    return res.status(401).send("Unauthorized");
    next();
  }
};

module.exports = authorize;
