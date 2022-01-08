const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mysql = require("mysql");
const passport = require("passport");
const keys = require("../config/keys");
const fs = require("fs")
const data = fs.readFileSync("./database.json");
const conf = JSON.parse(data);
const db = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});

passport.serializeUser(function(user,done) {
  User.findById(user,function(err, user))
  done(null,user);
})

passport.deserializeUser(function(user,done) {
  done(null,user.id);
})

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  }, (accesToken, refreshToken, profile, done)=>{
    console.log('accesToken', accesToken);
    console.log('refreshToken', refreshToken);
    console.log('profile', profile);
    console.log('done', done);
    User.findOrCreate({ googleId: profile.id }, function(err, user) {
      return done(err, user);
    })
  })
  );
  