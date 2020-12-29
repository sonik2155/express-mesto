/* eslint-disable no-useless-escape */
const mongoose = require("mongoose");

const regex = /https?:\/\/([\/\w.-]+)/;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return regex.test(v);
      },
      message: "Неверная ссылка!",
    },
  },
});

module.exports = mongoose.model("user", userSchema);
