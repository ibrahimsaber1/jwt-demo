const express = require("express");
const mongoose = require("mongoose");

// database connection :)

mongoose.connect("mongodg//localhost:27017/AUTH").then(() => {
  console.log("DB connection Successfully :)");
});
