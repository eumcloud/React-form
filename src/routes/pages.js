const express = require("express");
const authController = require('../controllers/auth');

const router = express.Router();

const publicDirectory = path.join(__dirname, '/build/index.html');  
app.use(express.static(publicDirectory));   

router.get('*', function (req, res) {
    res.sendFile('index.html');
    console.log('index rendered');
  });              


// authController.isLoggedIn, 
// router.get('/', (req, res) => {
//     res.render('index', {
//         user: req.user
   
//     }
//     );
//     console.log('index rendered');
// });

// router.get('/signup', (req, res) => {
//     res.render('signup');
//     console.log('signup rendered');
// });




module.exports = router;