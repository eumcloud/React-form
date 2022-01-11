const express = require("express");
const router = express.Router();
const getConn = require("../db");




// router.get('/', authController.isLoggedIn, (req, res) => {
router.get('/',  (req, res) => {
   // console.log(req.user);
   // if( req.user ) {
   //   res.render('profile', {
   //     user: req.user
   //   });
   // } else {
   //   res.redirect('/login');
   // }
   res.json({mypage:"list"})
 })

 router.get("/buylist", (req, res)=>{
   let squery = "select * from Products";

   getConn((conn) => {
      conn.query(squery, (err, rows)=>{
         console.log(rows);
         res.json(rows)
      });
      conn.release();
    });
 })



module.exports = router;