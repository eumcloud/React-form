const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');


router.post('/signup', authController.signup);
router.post('/signin', authController.singin);

router.get('/profile', authController.isLoggedIn, (req, res) => {
    console.log(req.user);
    if( req.user ) {
      res.render('profile', {
        user: req.user
      });
    } else {
      res.redirect('/login');
    }
    
  })
  
router.get('/logout', authController.logout);

module.exports = router;
