const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cookieParser = require("cookie-parser");
const fs = require("fs")
const auth = require("./client/src/routes/auth");
const port = 3001;
const cors = require("cors");
const authController = require('./client/src/controllers/auth');
// require("./service/passport");
// require('./routes/authRoutes')(app);
// app.use(passport.initialize());
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/auth', auth);

// app.use(cookieSession({
//   name: 'test-session',
//   keys: ['key1', 'key2']
// }))

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



app.get("/api/products", (req, res) => {
    connection.query(
      "SELECT * FROM Products",
      (err, rows, fields) => {
        res.send(rows);
      }
    )
});

app.get("/api/boards", (req, res) => {
    connection.query(
      "SELECT * FROM Boards",
      (err, rows, fields) => {
        res.send(rows);
      }
    )
});

app.post("/board/write", (req, res)=>{
  var buserid = req.body.buserid;
  var btitle = req.body.btitle;
  var bcontent = req.body.bcontent;
  var datas = [buserid, btitle, bcontent];
  console.log(req)
    let sQuery = "insert into Boards(buserid, btitle, bcontent, regdate, modidate, bhit, blikeuser) values(?,?,?,now(),now(),0,0)";  // ? 는 매개변수
        connection.query(sQuery, datas,(err, result, fields) => {
          res.send(result)
        });
}) 

app.listen(port, () => console.log(`Listening on port ${port}`));
