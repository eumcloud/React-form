const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
   res.render("board") 
});


router.get("/list", (req, res)=>{
   res.render("list")
}) // local:3000/board/list
router.get("/read", (req, res)=>{
   res.render("read")
}) // local:3000/board/read

module.exports = router;