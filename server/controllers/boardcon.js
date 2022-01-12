const mysql = require("mysql");
const fs = require("fs");
const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);


const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});

exports.getBoard = (req, res) => {
  connection.query(
    "SELECT * FROM Boards",
    (err, rows, fields) => {
      res.send(rows);
    }
  )
}

exports.writeBoard = (req, res)=>{
  var buserid = req.body.buserid;
  var btitle = req.body.btitle;
  var bcontent = req.body.bcontent;
  var datas = [buserid, btitle, bcontent];
    let sQuery = "insert into Boards(buserid, btitle, bcontent, regdate, modidate, bhit, blikeuser) values(?,?,?,now(),now(),0,0)";  // ? 는 매개변수
        connection.query(sQuery, datas,(err, result, fields) => {
          res.send(result)
        });
}

exports.updateBoard = (req,res) => {
  var bidx = req.body.bidx;
  var btitle = req.body.btitle;
  var bcontent = req.body.bcontent;
  let sQuery = `UPDATE Boards SET btitle=("${btitle}"), bcontent=("${bcontent}"), modidate=now() where bidx=${bidx}`;  // ? 는 매개변수
  connection.query(sQuery, (err, result, fields) => {
    res.send(result)
  })
}

exports.deleteBoard = (req, res) => {
  var bidx = parseInt(req.query.bidx);
  connection.query(
    `DELETE from Boards where bidx=${bidx}`
  )
}

exports.hitInc = (req,res) => {
  var bidx = req.body.bidx;
  let sQuery = `UPDATE Boards SET bhit=bhit+1 where bidx=${bidx}`;
  connection.query(sQuery, (err, result, fields) => {
    res.send(result)
  })
}

exports.getComment = (req, res) => {
  connection.query(
    `SELECT * FROM Comments`,
    (err, rows, fields) => {
      res.send(rows);
    }
  )
}

exports.writeComment = (req, res) => {
  var idx = req.body.board_idx;
  var cuserid = req.body.cuserid;
  var ccontent = req.body.ccontent;
    connection.query(
      `INSERT INTO Comments(cuserid, ccontent, board_idx) values('${cuserid}','${ccontent}','${idx}')`,
      (err, rows, fields) => {
        res.send(rows);
      }
    )
}

exports.deleteComment = (req, res) => {
  var cidx = parseInt(req.query.cidx);
  console.log(cidx)
  connection.query(
    `DELETE from Comments where cidx=${cidx}`
  )
}