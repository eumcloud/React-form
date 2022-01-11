const express = require("express");
const router = express.Router();
const getConn = require("../db");


// router.get('/', authController.isLoggedIn, (req, res) => {
router.get('/',  (req, res) => {
   const userid = req.body.userid;
   console.log("USER"+userid+"PageIn");
 })

 router.get("/buylist", (req, res)=>{
   let userid = req.body.userid;
   let squery = `SELECT * FROM buys where userid=${userid}`;

   getConn((conn) => {
      conn.query(squery, (err, rows)=>{
         console.log(rows);
         res.json(rows)
      });
      conn.release();
    });
 })
 router.get("/cart", (req, res)=>{
   let userid = req.body.userid;
   let squery = `SELECT * from buys where userid=${userid}`;

   getConn((conn) => {
      conn.query(squery, (err, rows)=>{
         console.log(rows);
         res.json(rows)
      });
      conn.release();
    });
 })
 router.get("/queslist", (req, res)=>{
    let userid = req.body.userid;
   let squery = `select * from ${qlist} where userid = ${userid}`;

   getConn((conn) => {
      conn.query(squery, (err, rows)=>{
         console.log(rows);
         res.json(rows)
      });
      conn.release();
    });
 })
 router.get("/chpass", (req, res)=>{
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
 router.get("/shipaddr/insrt", (req, res)=>{
   let userid = req.body.userid;
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
 router.get("/shipaddr/upt", (req, res)=>{
   let squery = "select * from Products";

   getConn((conn) => {
      conn.query(squery, (err, rows)=>{
         console.log(rows);
         res.json(rows)
      });
      conn.release();
    });
 })

 router.get("/payinfo", (req, res)=>{
   const authId = req.body.userid
   let squery = `UPDATE payinfo SET ${authId}`;

   getConn((conn) => {
      conn.query(squery, (err, rows)=>{
         console.log(rows);
         res.json(rows)
      });
      conn.release();
    });
 })
 router.get("/seccession", (req, res)=>{
   const userid = req.body.id;
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