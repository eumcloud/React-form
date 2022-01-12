const express = require("express");
const router = express.Router();
// const icarts = require("../cart.package/interface/icarts");
const cartD = require("./cart.package/dao/cartDao");

// RESTfull: " 장바구니 "

// Read Controller
router.get("/", (req, res)=>{
    let id = "tea" // req.session.id;
    let resp = cartD.getCartlist(id);
    console.log(resp);
    res.json(resp);
});

// Create Controller
router.post("/", (req, res)=>{
    let productid = req.body.id;
    let userid = req.session.userid;
    
    let resp = cartD.addCart(productid, userid);
    res.json(resp);
});

// Update Controller
router.patch("/", (req, res)=>{
    //상품옵션 고려
    let productid = req.body.id;
    let options = req.body.value; // or Obj{ }
    let userid = req.session.userid;
    
    let resp = cartD.addCart(productid, userid, options);
    res.json(resp);
});

// Delete Controller
router.delete("/", (req, res)=>{
    let productid = req.body.id;
    let userid = req.session.userid;
    
    let resp = cartD.deleteItem(productid, userid);
    res.json(resp);
});

module.exports = router;