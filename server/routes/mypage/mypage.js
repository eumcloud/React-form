const express = require("express");
const router = express.Router();
const getConn = require("./model/db");

/* SSR대신 RESTfull API로 대체 */

//정리를 위해 파일분할
const carts = require("./carts");
const buylist = require("./buylist");
// const Buylist = require("./model/buylist.package/buylistDAO");
// const directquestion = require("./directquestion");
// const shipaddrs = require("./shipaddr");
// const payinfo = require("./payinfo");

router.use("/cart", carts);
router.use("/buylist", buylist);
// router.use("/dm", directquestion);
// router.use("/addrs", shipaddrs);
// router.use("/payifo", payinfo);



/* ▼defaults: 마이페이지, 구매내역조회, 비번 찾기/변경, 탈퇴요청 */


// router.get('/', authController.isLoggedIn, (req, res) => {
router.get('/',  (req, res) => {
   const userid = req.query.userid//req.body.userid;
   // console.log("USER : "+userid+" PageIn");
   res.cookie("jwtoken", `sha256`);
   res.json(userid+" 님이 mypage 접속함")
})

// router.post("/buylist", (req, res)=>{
//    const userid = req.body.userid; //req.params.userid; // req.query.userid;
//    console.log("chk USERID : "+ userid)
//    console.log("쿠키 : ", req.cookies);
//    let rows = " 준비중.."//Buylist.getBuylist(userid);

//    res.json(userid + rows + req.cookies.jwtoken);
// })
 
 
 router.post("/chpass", (req, res)=>{
     let userid = "tea"//req.body.userid;
    const chpass = req.body.inputs;
   let squery = `UPDATE users SET ${chpass} where userid=${userid}`;

   getConn((conn) => {
      conn.query(squery, (err, rows)=>{
         console.log(rows);
         res.json(rows)
      });
      conn.release();
    });
 }) 
 router.post("/shipaddr/insrt", (req, res)=>{
   let userid = "tea"//req.body.userid;
   let addrs = req.body.addrs;
   let squery = `INSERT INTO addrs(${userid}, ${addrs}) values Products`;

   getConn((conn) => {
      conn.query(squery, (err, rows)=>{
         console.log(rows);
         res.json(rows)
      });
      conn.release();
    });
 })
 router.patch("/shipaddr/upt/:id", (req, res)=>{
    let id = req.params.id;
    let squery = `UPDATE users SET addr where id=${id}`;

   getConn((conn) => {
      conn.query(squery, (err, rows)=>{
         console.log(rows);
         res.json(rows)
      });
      conn.release();
    });
 })

 router.post("/payinfo", (req, res)=>{
     let id = req.body.id;
     let squery = `Select * from users where ${id}`;
     getConn((conn)=>{
         conn.query(squery, (err,result)=>{
         
             res.json({}) 
         });
         conn.release();
     });
 });
 router.patch("/payinfo", (req, res)=>{ //결제정보 수정
   const authId = "tea"//req.body.userid;
   const pinfo = req.body.inputs;
   let squery = `UPDATE payinfo SET ${pinfo} where id = ${authId}`;

   getConn((conn) => {
      conn.query(squery, (err, rows)=>{
         console.log(rows);
         res.json(rows)
      });
      conn.release();
    });
 })
 router.post("/seccession", (req, res)=>{ // 회원탈퇴
     // 로그인체크
     // 최종 인증 체크 (실시간 계정인증 == 직접입력)
     
   const userid = "tea"//req.body.userid;
   let squery = `DELETE FROM users
   WHERE userid = ${userid};`;

   getConn((conn) => {
      conn.query(squery, (err, result)=>{
         console.log(result);
         res.send(result)
      });
      conn.release();
    });
 })



module.exports = router;