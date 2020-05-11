"use strict";
const express = require("express");
const app = express();
const routes = require("./router");
const port = 3000;

app.use(express.static(__dirname + "/public"));
app.use(express.json());

//catch all
app.get("/api/items", (res, req) => {
  console.log("200", req.path);
  res.json("200");
});

//add items
app.post("/api/items", (req, res) => {
  console.log("201", req.path);
  res.json("201");
});

app.put("/api/items/:id", (req, res) => {
  console.log("200", req.path);
  res.json("200");
});

app.delete("api/items/:id", (req, res) => {
  console.log("204", req.path);
  res.json("204");
});

app.listen(port, () => {
  console.log(`Server is running: ${port}`);
});
