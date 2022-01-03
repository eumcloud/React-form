const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { promisify } = require('util');

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  });

exports.login = (req, res) => {
    try {
        const { email, userpwd } = req.body;
        

        if(!email || !userpwd) {
            return res.status(400).render('login', {
                message: 'Please provide email and password'
            });
           
        }
        db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {

            if( !results || !(await bcrypt.compare(userpwd, results[0].userpwd) ) ) {
                console.log(results);
                res.status(401).render('login', {
                    message: 'email or password is incorrect.'
                    
                });
            } else {
                const userid = results[0].userid
                const token = jwt.sign({userid: userid}, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES_IN
                });
                console.log('The token is: ' + token);

                const cookieOption = {
                    expiresIn: new Date(
                        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
                    ),
                    httpOnly: true
                }

                 res.cookie('jwt', token, cookieOption);
                 res.status(200).redirect("/");
            }
        })

    } catch (error) {
        console.log(error);
    }



}


exports.register = (req, res) => {
        console.log(req.body);
        const { userid, email, userpwd, pwdConfirm} = req.body;

        db.query('SELECT email from users WHERE email = ?', [email], async (err, results) =>{
            if(err) throw err;

            if(results > 0) {
                return res.render('register', {
                    message : 'That email is already in use'
                });
            } else if( userpwd !== pwdConfirm) {
                return res.render('register', {
                    message: 'Password do not match'
                });
            }
            let hashedPwd = await bcrypt.hash(userpwd, 8);
            console.log(hashedPwd);
            
            db.query('INSERT INTO users SET ?', {userid: userid, userpwd: hashedPwd, email: email,}, (err, results) =>{
                if(err) throw err;
                
                console.log(results);
                return res.render('register', {
                message: 'Register complete.'
                })
            });
        });

        
};



exports.isLoggedIn = async (req, res, next) => {
  
    if( req.cookies.jwt) {
      try {
    
        const decoded = await promisify(jwt.verify)(req.cookies.jwt,
        process.env.JWT_SECRET
        );
  
        console.log(decoded);
  
        db.query('SELECT * FROM users WHERE userid = ?', [decoded.userid], (error, result) => {
          console.log(result);
  
          if(!result) {
            return next();
          }
          
          req.user = result[0];
          console.log("user is")
          console.log(req.user);
          return next();
  
        });
      } catch (error) {
        console.log(error);
        return next();
      }
    } else {
      next();
    }
  }


  exports.logout = async (req, res) => {
      res.cookie('jwt', 'logout', {
          expires: new Date(Date.now()+ 2*1000),   // 2 * 1000 밀리세컨드
          httpOnly: true
      });

      res.status(200).redirect('/');
  }