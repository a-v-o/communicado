var express = require("express");
var app = express();
var expressWs = require("express-ws")(app);

app.use(function (req, res, next) {
  console.log("middleware");
  req.testing = "testing";
  return next();
});

app.use(express.static("public"));

app.get("/", function (req, res, next) {
  console.log("get route", req.testing);
  res.sendFile("./public/index.html");
  res.end();
});

app.ws("/", function (ws, req) {
  ws.on("open", function () {
    console.log("opened");
  });
  ws.on("message", function (message) {
    ws.send(message);
  });
  console.log("socket", req.testing);
});

app.listen(3000);
