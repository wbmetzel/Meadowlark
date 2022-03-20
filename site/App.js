const express = require("express");

const app = express();

// Integrate handlebars for view engine //

const handlebars = require("express3-handlebars").create({
  defaultLayout: "main",
});
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

// // // // // // // // // // // // // // //

app.set("port", process.env.PORT || 3000);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  let fortunes = ["yes", "no", "maybe", "try again later"];
  let random = fortunes[Math.floor(Math.random() * fortunes.length)];

  res.render("about", { fortune: random });
});

// Custom 404 page
app.use((req, res) => {
  res.status(404);
  res.render("404");
});

// Custom 500 page
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500);
  res.render("500");
});

app.listen(app.get("port"), () => {
  console.log("Express started on http://localhost: " + app.get("port"));
  console.log("Press Ctrl + C to terminate...");
});
