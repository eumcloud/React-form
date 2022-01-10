const passport = require('passport');
const authController = require('../client/src/controllers/auth');

module.exports = (app) => {

app.get('/', (req, res) => { res.send("You are welcome to log in")})
app.get('/failed', (req, res) => { res.send("Failed.") });
app.get('/good', authController.isLoggedIn, (req, res) => { res.send(`Welcome mr ${req.user.email}`) });

app.get('/auth/google', passport.authenticate('google',{scope: ['profile', 'email']}));
  
app.get('/auth/google/callback', passport.authenticate('google',  {flexDirectionfailure: '/failed'}),
    function (req, res) {
        res.redirect('/');
    });

app.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    req.redirect('/')
})


}
