const express = require("express");
const router = express.Router();

const Controller = require("../controllers/mypage")

// router.use("/cart", carts);

// router.get('/', authController.isLoggedIn, (req, res) => {
router.get('/');
//구매내역
router.get("/buylist", Controller.api.getBuylist );

//장바구니
router.get("/cart", Controller.api.getCartlist);
router.post("/cart", Controller.api.addCartItem);
router.patch("/cart", Controller.api.modifyCart);
router.delete("/cart", Controller.api.deleteCartItem);

//1대1문의
router.get("/dm", Controller.api.getDMList );
router.post("/dm", Controller.api.writeDM );
router.patch("/dm", Controller.api.modifyDM );
router.delete("/dm", Controller.api.deleteDM );

//비번초기화 : 비번찾기 / 비번변경
router.patch("/passinitialize", Controller.api.modifyPassword );

//배송지변경
router.patch("/modAddress", Controller.api.modifyAddress );

//결제정보변경
router.patch("/payinfo", Controller.api.modifyPayinfo );

//탈퇴
router.patch("/secession", Controller.api.outOfMember );





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
   /* ▼defaults: 마이페이지, 구매내역조회, 비번 찾기/변경, 탈퇴요청 */
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