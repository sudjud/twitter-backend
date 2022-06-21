const { Router } = require('express');
const router = Router();

router.use(require('./twitt.route'));
router.use(require('./user.route.js'));
// router.use(require('./comment.route.js'));
// router.use(require('./review.route.js'));

module.exports = router;
