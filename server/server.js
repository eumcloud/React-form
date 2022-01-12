const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cookieParser = require("cookie-parser");
const fs = require("fs")
const auth = require("./routes/auth");
const board = require("./routes/board")
const port = 3001;
const cors = require("cors");
const authController = require('./controllers/auth');

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/auth', auth);
app.use('/board', board)

const data = fs.readFileSync("./database.json");
const conf = JSON.parse(data);
const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});

connection.connect((err) => {                           
  if(err) throw err;
  console.log("MySQL Conected!!!");
});

app.get('/', authController.isLoggedIn, (req, res) => {
  res.send({
    user: req.user
  });
});

app.get('/mypage', authController.isLoggedIn, (req, res) => {
  console.log(req.user);
  if( req.user ) {
    res.send({
      user: req.user
    });
  } else {
    res.redirect('/login');
  }
  
})

// app.get("/auth/logout", authcontroller.logout, (req, res) => {

// });


app.get("/api/products", (req, res) => {
    connection.query(
      "SELECT * FROM Products",
      (err, rows, fields) => {
        res.send(rows);
      }
    )
});


app.listen(port, () => console.log(`Listening on port ${port}`));
