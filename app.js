const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/profile", (req, res) => {
  res.render("profile");
});
app.get("/services", (req, res) => {
  res.render("services");
});

app.get("/safety", (req, res) => {
  res.render("safety");
});

app.get("/business", (req, res) => {
  res.render("business");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
