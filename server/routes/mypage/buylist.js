
const express = require("express");
const router =  express.Router();
const Buylist = require("./model/buylist.package/buylistDAO");

router.get("/", (req, res)=>{
    const userid =  req.query.userid;//req.cookies.id;
    const rows = Buylist.getBuylist(userid);
    res.json(rows);
});

module.exports = router;