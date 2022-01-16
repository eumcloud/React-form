const buylistDAO = require("../model/buylistDAO");
const cartDAO = require("../model/cartDao");
const dmDAO = require("../model/dmDAO");
const bcrypt = require("bcryptjs");
const passDAO = require("../model/passDAO");
const addressDAO = require("../model/addressDAO");
const payinfoDAO = require("../model/payinfoDAO");
const secessionDAO = require("../model/secessionDAO");


module.exports  = {
    needs: () => upload,

    api:{
        //구매내역 Controller
        getBuylist: async (req, res)=>{
            let userid = "ssa" //req.cookies.id;
            let result = await buylistDAO.getList(userid) ;
            console.log("Controller --> getBuylist", result);
            res.json(result);    
        },

        //장바구니 Controller
        getCartlist: async (req, res)=>{
            console.log("Controller --> getCartlist");
            let userid = "ssa" //req.cookies.id;
            
            let result = await cartDAO.getCartlist(userid);
            res.json(result);    
        },
        addCartItem: async (req, res)=>{
            console.log("Controller --> addCartItem");
            let userid = "ssa" //req.cookies.userid;
            let productid = 1 //req.body.productid;
            let result = await cartDAO.addCartItem(userid, productid) ;
            res.json(result);    
        },
        modifyCart: async (req, res)=>{
            console.log("Controller --> modifyCart");
            let userid = "ssa" //req.cookies.id;
            let productid = 3; // req.body.productid
            let amount = 2; //req.body.amount;
            let options = "basic"; //req.body.amount;

            let result = await cartDAO.modifyCart(userid, productid, amount, options);
            res.json(result);  
        },
        deleteCartItem: async (req, res)=>{
            console.log("Controller --> deleteCartItem");
            let userid = "ssa" //req.cookies.id;
            let productid = 1; // req.body.productid
            let cno = 6; // req.body.productid
            let result = await cartDAO.deleteCartItem(userid, cno);
            res.json(result);  
        },
        //1대1문의 Controller
        getDMList: async (req, res)=>{
            console.log("Controller --> getDMList");
            let userid = "ssa" //req.cookies.id;
            let result = await dmDAO.getDMList(userid);
            res.json(result);    
        },
        writeDM: async (req, res)=>{
            console.log("Controller --> writeDM");
            let userid = "ssa" //req.cookies.id;
            let contentObj = {no: 7, qtype:"배송", title:"title09", descript:"create Descriptilon"} 
            let result = await dmDAO.writeDM(userid, contentObj);
            res.json(result);    
        },
        modifyDM: async (req, res)=>{
            console.log("Controller --> modifyDM");
            let userid = "ssa" //req.cookies.id;
            let contentObj = {no: 7, qtype:"", title:"title19", descript:"create Description"}

            let result = await dmDAO.modifyDM(userid, contentObj);
            res.json(result);  
        },
        deleteDM: async(req, res)=>{
            console.log("Controller --> deleteDM");
            let userid = "ssa" //req.cookies.id;
            let qnumber = 10 //req.cookies.id;
            let result = await dmDAO.deleteDM(userid, qnumber);
            res.json(result);  
        },


        // 비번초기화/찾기
        modifyPassword: async(req, res)=>{
            console.log("Controller --> modifyPassword");
            let userid = "last" //req.cookies.id;
            let getPassword = "abcd1234"; // req.body.getPassword
            let result = await passDAO.modifyPassword(userid, getPassword);
            res.json(result);  
        },

        // 배송지 Initialize
        modifyAddress: async(req, res)=>{
            console.log("Controller --> modifyAddress");
            let userid = "ssa" //req.cookies.id;
            // let address = [
            //     {idx: 1, addr1:"서울 강동구 천호동", addr2: "123-12"},
            //     {idx: 2, addr1:"서울 송파구 방이동", addr2: "113-12"},
            //   ];
            let address = ["서울 강남구 논현동 | 234-12", "서울 강동구 천호동 | 111-222"];
            
            let result = await addressDAO.modifyAddress(userid, address);
            res.json(result);  
        },


        // 결제정보 Controller
        modifyPayinfo: async(req, res)=>{
            console.log("Controller --> modifyPayinfo");
            let userid = "ssa" //req.cookies.id;
            let payinfo = [
                {idx: 1, type:"카드", option:"카카오", desc:[1234,1234,1234,1234], auth6:123456 },
                {idx: 2, type:"카드", option:"카카오", desc:[1234,1234,1234,1234], auth6:123456 },
                {idx: 3, type:"카드", option:"카카오", desc:[1234,1234,1234,1234], auth6:123456 },
                {idx: 4, type:"카드", option:"카카오", desc:[1234,1234,1234,1234], auth6:123456 },
            ]
            let result = await payinfoDAO.modifyPayinfo(userid, payinfo);
            res.json(result);  
        },
        // 회원탈퇴 Controller 
        outOfMember: async(req, res)=>{
            console.log("Controller --> outOfMember");
            let userid = "asdsad" //req.cookies.id;
            let auth = 123; // req.cookies.jwt
            let result = await secessionDAO.outOfMember(userid, auth);
            res.json(result);  
        },
    }
}