const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = Schema({
  text: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  twitt: {
    type: Schema.Types.ObjectId,
    ref: 'Twitt'
  }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;

