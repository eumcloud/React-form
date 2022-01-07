const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');


router.post('/signup', authController.signup);
router.post('/signin', authController.singin);
router.get('/signin');
// router.get('/logout', authController.logout);

module.exports = router;
