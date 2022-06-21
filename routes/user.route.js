const Router = require('express');
const router = Router();
const {userController} = require('../controllers/user.controller');

router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUser);
router.post('/users', userController.addUser);
router.patch('/users', userController.updateUser);
router.patch('/users/:id/twitt', userController.createTwitt);
router.patch('/users/:id/saved', userController.saveTwitt);
router.patch('/users/:id/twitt/:twittId', userController.commentTwitt);

module.exports = router;