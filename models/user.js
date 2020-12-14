const mongoose = require('mongoose');

const regex = /https?:\/\/([\/\w.-]+)/;

const userSchema = new mongoose.Schema({
name: {
  type: String,
  require: true,
  minlength: 2,
  maxlength: 30
},
about: {
  type: String,
  require: true,
  minlength: 2,
  maxlength: 30
},
avatar: {
    type: String,
    require: true,
    validate: {
      validator(v) {
        return regex.test(v)
      },
      message: "This link is not valid!",
    }
}
});

module.exports = mongoose.model('user', userSchema);