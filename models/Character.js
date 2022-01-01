const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  quotes: {
    type: [ String ]
  },
  avatar: String
});

module.exports = mongoose.model('Character', characterSchema);