const Router = require('express');
const router = Router();
const {twittController} = require('../controllers/twitt.controller');

router.delete('/twitts/:id', twittController.deleteTwit);
router.get('/twitts', twittController.getTwitts);
router.patch('/twitts/:id/like/:userid', twittController.likedTwitt);

module.exports = router;