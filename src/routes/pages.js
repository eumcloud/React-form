const express = require("express");
const authController = require('../controllers/auth');

const router = express.Router();



router.get('/', authController.isLoggedIn, (req, res) => {
    res.render('index', {
        user: req.user
   
    }
    );
    console.log('index rendered');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});



module.exports = router;