const express = require("express");
const app = express();

const api_route = require("./api_route");
const html_route = require("./html_route");

app.use("/api",api_route);
app.use("/",html_route);

module.exports = app