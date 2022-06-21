const User = require('../models/User.model');
const Twitt = require('../models/Twitt.model');
const Comment = require('../models/Comment.model');

module.exports.userController = {
  addUser: async (req, res) => {
    const {
      nickname
    } = req.body;
    try {
      res.json(`Добавлен пользователь ${(await User.create({nickname})).nickname}`);
    } catch (e) {
      res.json(e);
    }
  },
  updateUser: async (req, res) => {
    try {
      res.json(`Изменен пользователь ${(await User.findByIdAndUpdate(req.params.id, {...req.body})).nickname}`);
    } catch (e) {
      res.json(e);
    }
  },
  createTwitt: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.params.id, {
        $push: {
          twitt: (await Twitt.create({
            text: req.body.text,
            user: req.params.id
          }))
        }
      })
      res.json(`Пост создан пользователем ${(await User.findById(req.params.id)).nickname}`)
    } catch (e) {
      res.json(e);
    }
  },
  getUser: async (req, res) => {
    try {
      res.json(await User.findById(req.params.id))
    } catch (e) {
      res.json(e);
    }
  },
  getUsers: async (req, res) => {
    try {
      res.json(await User.find({}).populate('saved', 'text'))
    } catch (e) {
      res.json(e);
    }
  },
  saveTwitt: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.params.id, {
        $push: {
          saved: (await Twitt.findById(req.body.twitt))
        }
      })
      res.json(`Твит сохранен. ${req.body.twitt}`)
    } catch (e) {
      res.json(e);
    }
  },
  commentTwitt: async (req, res) => {
    const {
      id,
      twittId
    } = req.params;
    try {
      await User.findByIdAndUpdate(id, {
        $push: {
          commented: (await Twitt.findByIdAndUpdate(twittId, {
            $push: {
              comment: (await Comment.create({
                text: req.body.comment,
                user: id,
                twitt: twittId
              }))
            }
          }))
        }
      })
      res.json('Твит репостнут и прокомментирован')
    } catch (e) {
      res.json(e);
    }
  },
  
}