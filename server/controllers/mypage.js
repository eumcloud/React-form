const buylistDAO = require("../routes/temp/model/buylistDAO");
const cartDAO = require("../routes/temp/cart.package/dao/cartDao");
const dmDAO = require("../routes/temp/model/dmDAO");
const passDAO = require("../routes/temp/model/passDAO");
const addressDAO = require("../routes/temp/model/addressDAO");
const payinfoDAO = require("../routes/temp/model/payinfoDAO");
const secessionDAO = require("../routes/temp/model/secessionDAO");


module.exports  = {
    needs: () => upload,

    api:{
        //구매내역 Controller
        getBuylist: (req, res)=>{
            let userid = "ssa" //req.cookies.id;
            let result = buylistDAO.getList(userid) ;
            console.log("Controller --> getBuylist", result);
            res.json(result);    
        },

        //장바구니 Controller
        getCartlist: (req, res)=>{
            console.log("Controller --> getCartlist");
            let userid = "ssa" //req.cookies.id;
            
            let result = cartDAO.getList(userid);
            res.json(result);    
        },
        addCartItem: (req, res)=>{
            console.log("Controller --> addCartItem");
            let userid = "ssa" //req.cookies.userid;
            let productid = 1 //req.body.productid;
            let result = cartDAO.addCartItem(userid, productid) ;
            res.json(result);    
        },
        modifyCart: (req, res)=>{
            console.log("Controller --> modifyCart");
            let userid = "ssa" //req.cookies.id;
            let productid = 1; // req.body.productid
            let result = cartDAO.modifyCart(userid, productid);
            res.json(result);  
        },
        deleteCartItem: (req, res)=>{
            console.log("Controller --> deleteCartItem");
            let id = "ssa" //req.cookies.id;
            let productid = 1; // req.body.productid
            let result = cartDAO.deleteCartItem(id);
            res.json(result);  
        },
        //1대1문의 Controller
        getDMList: (req, res)=>{
            console.log("Controller --> getDMList");
            let userid = "ssa" //req.cookies.id;
            let result = dmDAO.getDMList(userid);
            res.json(result);    
        },
        writeDM: (req, res)=>{
            console.log("Controller --> writeDM");
            let userid = "ssa" //req.cookies.id;
            let contentObj = {qtype:"", title:"title99", desc:"create Description"} 
            let result = dmDAO.writeDM(userid, contentObj);
            res.json(result);    
        },
        modifyDM: (req, res)=>{
            console.log("Controller --> modifyDM");
            let userid = "ssa" //req.cookies.id;
            let contentObj = {qtype:"", title:"title99", desc:"create Description"}

            let result = dmDAO.modifyDM(userid, contentObj);
            res.json(result);  
        },
        deleteDM: (req, res)=>{
            console.log("Controller --> deleteDM");
            let userid = "ssa" //req.cookies.id;
            let qnumber = 1 //req.cookies.id;
            let result = dmDAO.deleteDM(userid, qnumber);
            res.json(result);  
        },


        // 비번초기화/찾기
        modifyPassword: (req, res)=>{
            console.log("Controller --> modifyPassword");
            let userid = "ssa" //req.cookies.id;
            let getPassword = 1234; // req.body.getPassword
            let result = passDAO.modifyPassword(userid, getPassword);
            res.json(result);  
        },

        // 배송지 Initialize
        modifyAddress: (req, res)=>{
            console.log("Controller --> modifyAddress");
            let userid = "ssa" //req.cookies.id;
            // let address = [
            //     {idx: 1, addr1:"서울 강동구 천호동", addr2: "123-12"},
            //     {idx: 2, addr1:"서울 송파구 방이동", addr2: "113-12"},
            //   ];
            let address = ["서울 강남구 논현동 | 234-12", "서울 강동구 천호동 | 111-222"];
            
            let result = addressDAO.modifyAddress(userid, address);
            res.json(result);  
        },


        // 결제정보 Controller
        modifyPayinfo: (req, res)=>{
            console.log("Controller --> modifyPayinfo");
            let userid = "ssa" //req.cookies.id;
            let payinfo = [
                {idx: 1, type:"카드", option:"카카오", desc:[1234,1234,1234,1234], auth6:123456 },
                {idx: 2, type:"카드", option:"카카오", desc:[1234,1234,1234,1234], auth6:123456 },
                {idx: 3, type:"카드", option:"카카오", desc:[1234,1234,1234,1234], auth6:123456 },
                {idx: 4, type:"카드", option:"카카오", desc:[1234,1234,1234,1234], auth6:123456 },
            ]
            let result = payinfoDAO.modifyPayinfo(userid, payinfo);
            res.json(result);  
        },
        // 회원탈퇴 Controller 
        outOfMember: (req, res)=>{
            console.log("Controller --> outOfMember");
            let userid = "ssa" //req.cookies.id;
            let auth = 123; // req.cookies.jwt
            let result = secessionDAO.outOfMember(userid, auth);
            res.json(result);  
        },
    }
}