//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

let test = "Testing...";

app.get("/", (req, res) => {
  res.render("index", {test: test});
});

app.listen("3000", () => console.log("App is running on port 3000"));
