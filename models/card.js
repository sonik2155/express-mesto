const mongoose = require('mongoose');

const regex = /https?:\/\/([\/\w.-]+)/;

const cardSchema = new mongoose.Schema({
name: {
  type: String,
  require: true,
  minlength: 2,
  maxlength: 30
},
link: {
  type: String,
  require: true,
  minlength: 2,
  maxlength: 30,
  validate: {
    validator(v) {
      return regex.test(v)
    },
    message: "This link is not valid!",
  }
},
owner: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
},
likes: {
  require: Array,
  type: [{type: mongoose.Schema.Types.ObjectId}]
},
createdAt: {
type: Date,
default: Date.now
}
});

module.exports = mongoose.model('card ', cardSchema);