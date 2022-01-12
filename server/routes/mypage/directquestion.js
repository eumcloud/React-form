const express = require("express");
const router = express.Router();
// const icarts = require("../cart.package/interface/icarts");
const dmDao = require("./dm.package/dao/dmDao");

/* RESTfull: "1대1문의" */

// Read Controller
router.get("/", (req, res)=>{
    let id = "tea" // req.session.id;
    let resp = dmDao.getDMlist(id);
    console.log(resp);
    res.json(resp);
});

// Create Controller
router.post("/", (req, res)=>{
    let dm = {
        id: req.session.id,
        no: req.body.no,
        title: req.body.title,
        desc: req.body.desc,
        date: Date.now(),
    }
    console.log(dm);
    let userid = req.session.userid;
    
    let resp = dmDao.addDM(dm, userid);
    res.json(resp);
});

// Update Controller
router.patch("/", (req, res)=>{
   let dm = {
        id: req.session.id,
        no: req.body.no,
        title: req.body.title,
        desc: req.body.desc,
        date: Date.now(),
    }
    let userid = req.session.userid;
    
    let resp = dmDao.modifyDM(dm, userid);
    res.json(resp);
});

// Delete Controller
router.delete("/", (req, res)=>{
    let dno = req.body.no;
    let userid = req.session.userid;
    
    let resp = cartD.deleteItem(dno, userid);
    res.json(resp);
});

module.exports = router;