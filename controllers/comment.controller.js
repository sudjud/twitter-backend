const User = require('../models/User.model');
const Twitt = require('../models/Twitt.model');
const Comment = require('../models/Comment.model');

module.exports.commentController = {
  deleteComment: async (req, res) => {
    try {
      await Comment.findByIdAndDelete(req.params.id)
      res.json('Камент удален')
    } catch (error) {
      res.json(e);
    }
  },
  updateComment: async (req, res) => {
    try {
      await Comment.findByIdAndUpdate(req.params.id, {...req.body})
      res.json('Камент изменен')
    } catch (e) {
      res.json(e);
    }
  }
}