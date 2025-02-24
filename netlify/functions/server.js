const path = require("path");
const express = require("express");
const serverless = require("serverless-http");
const expressWs = require("express=ws")(app);

const app = express();

app.use(express.static("public"));

app.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

app.ws("/", function (ws, req) {
  ws.on("message", function (message) {
    ws.send(message);
  });
});

app.listen(3000);

export const handler = serverless(app);
