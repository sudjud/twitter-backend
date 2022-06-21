const User = require('../models/User.model');
const Twitt = require('../models/Twitt.model');
const Comment = require('../models/Comment.model');

module.exports.twittController = {
  deleteTwit: async (req, res) => {
    try {
      res.json(`Удален твит ${await Twitt.findByIdAndDelete(req.params.id)}`)
    } catch (e) {
      res.json(e);
    }
  },
  getTwitts: async (req, res) => {
    try {
      res.json(await Twitt.find({})
        .populate({
          path: 'comment',
          populate: {
            path: 'twitt'
          }
        })
      );
    } catch (e) {
      res.json(e);
    }
  },
  likedTwitt: async (req, res) => {
    const { id, userid } = req.params;
    try {
      await Twitt.findByIdAndUpdate(id, {
        $push: { likes: (await User.findByIdAndUpdate(userid, {
            $push: { liked: id }
          }))
        }
      })
      res.json(`Сделано`)
    } catch (e) {
      res.json(e);
    };
  },
  updateTwit: async (req, res) => {
    try {
      await Twitt.findByIdAndUpdate(req.params.id, {
        ...req.body
      })
      res.json(`Изменен твит: ${req.params.id}`)
    } catch (e) {
      res.json(e)
    }
  }
}