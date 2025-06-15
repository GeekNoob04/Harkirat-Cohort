// const bodyParser = require("body-parser");
// const express = require("express");
// const app = express();
// const port = 3000;

// app.use(bodyParser.json());
// app.get("/", (req, res) => {
//   const name = req.query.name;
//   const age = req.query.age;
//   console.log(name + " " + age);
//   res.send("<h1>Got the response<h1>");
// });
// app.get("/respage", (req, res) => {
//   res.send({
//     msg: "Hello there",
//   });
// });

// app.listen(port);
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.get("/", (req, res) => {
  const name = req.query.name;
  const age = req.query.age;
  console.log(name + " " + age);
  res.send("<h1>This is my response<h1>");
});
app.get("/respage", (req, res) => {
  res.json({
    message: "cheetah hi kehde",
  });
});
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
