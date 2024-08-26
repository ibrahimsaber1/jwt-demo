const express = require("express");
const mongoose = require("mongoose");

// database connection :)

mongoose
  .connect("mongodb://localhost:27017/AUTH")
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

// model for user

const userModel = mongoose.model("users", userschema);

// endpoints using EXPRESS :)

const app = express();

app.use(express.json()); // to reseve the data chunk by chunk .......

app.post("/register", (req, res) => {
  let user = req.body;
  userModel
    .create(user)
    .then((doc) => {
      res.send({ message: "User Registration Successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "Some Problem" });
    });
});

app.listen(5222, () => {
  console.log("successfully conecting to port 5222");
});
