const express = require("express");
const router = express.Router();
// const icarts = require("../cart.package/interface/icarts");
const cartD = require("./cart.package/dao/cartDao");
const getConn = require("./db")
 
/* RESTfull: " 장바구니 " */

// Read Controller (feat.권원현)
//root/mypage/cart/
router.get("/", (req, res)=>{
    const userid = "ssa";//req.body.userid;
    cartD.getCartlist(userid)
    .then(result => {res.json(result); console.log("최종 브라우저로 들어갈 "+result)})
    .catch(err => console.log(err));
});

// Create Controller
// post: root/mypage/cart/
router.post("/", (req, res)=>{
    let productid = req.body.id;
    let userid = req.session.userid;
    
    cartD.getCartlist(productid, userid)
    .then(result => res.json(result))
    .catch(err => console.log(err));
});


// Update Controller
// patch: root/mypage/cart/
router.patch("/", (req, res)=>{
    //상품옵션 고려
    let productid = req.body.id;
    let options = req.body.value; // or Obj{ }
    let userid = req.session.userid;
    
    cartD.getCartlist(productid, userid, options)
    .then(result => res.json(result))
    .catch(err => console.log(err));
});


// Delete Controller: root/mypage/cart/
router.delete("/", (req, res)=>{
    let userid = req.param("userid");
    let productid = req.param("productid");

    console.log(`브라우저에서 상품넘버 ${productid} && 고객정보 ${userid}를 가져옴`);
    
    cartD.deleteItem(productid, userid)
    .then(result => res.json( {note: `상품넘버 ${productid}의 내용이 제거되었습니다.`}))
    .catch(err => console.log(err));
});

module.exports = router;