import path from "path";
import express from "express";
import serverless from "serverless-http";
import expressWs from "express-ws";

const app = express();
const expressWs = expressWs(app);

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
