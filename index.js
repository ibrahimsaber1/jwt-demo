const express = require("express");
const mongoose = require("mongoose");

// database connection :)

mongoose
  .connect("mongodg//localhost:27017/AUTH")
  .then(() => {
    console.log("DB connection Successfully :)");
  })
  .catch((err) => {
    console.log(err);
  });

// schema

const userschema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
