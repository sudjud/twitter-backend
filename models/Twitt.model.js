const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const twittSchema = Schema({
  text: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  comment: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }]
});

const Twitt = mongoose.model('Twitt', twittSchema);

module.exports = Twitt;