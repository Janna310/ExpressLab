"use strict";
const express = require("express");
const app = express();
const routes = require("./router");
const port = 3000;

//allows public directory to be read from the server
app.use(express.static(__dirname + "/public"));
app.use(express.json());

//any request that the server receives gets sent to the routs file
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is running: ${port}`);
});
