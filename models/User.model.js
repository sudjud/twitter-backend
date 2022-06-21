const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
  nickname: String,
  twitt: [{
    type: Schema.Types.ObjectId,
    ref: 'Twitt'
  }],
  commented: [{
    type: Schema.Types.ObjectId,
    ref: 'Twitt'
  }],
  liked: [{
    type: Schema.Types.ObjectId,
    ref: 'Twitt'
  }],
  saved: [{
    type: Schema.Types.ObjectId,
    ref: 'Twitt'
  }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;