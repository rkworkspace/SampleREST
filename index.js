//app.js

const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();

router.get("/", (req, res) => {
    res.send("App is running..");
});

router.post("/", (req, res) => {
  res.send("post called");
});

app.use("/.netlify/functions/app", router);
module.exports.handler = serverless(app);
