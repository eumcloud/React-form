const getConn = require("../db");

exports.getShippingAddr = (userid) =>{
    return promises((resolve, reject)=>{
        getConn((conn)=>{
            try{
                let sQuery = `Select * from users where userid=${userid}`;
                conn.query(sQuery, (err, result)=>{
                    if(!err){
                        resolve(result);
                    }
                });
            }catch(err) {throw err;}
        })
    })
}
exports.addAddress = (userid, address) =>{
    return promises((resolve, reject)=>{
        getConn((conn)=>{
            let sQuery = `Select * from users where userid=${userid}`;
            try{
                conn.query(sQuery, (err, result)=>{
                    if(!err){
                        resolve(result);
                    }
                });
            }catch(err) {throw err;}
        })
    })
}
let arr = ["서울 중구 금천로", "서울 강서구 구로", "서울 강동구 천호"];
let addrDetail = ["231-3", "동구아파트 101-301호"]
arr.push("경기도 남양주 호평동")

/* 
1. addr1, addr2 배열관리
const addr1 = ["1", "2"]
const addr2 = ["1" "2"]

<input type='text' name="addr1[0]"><input type='text' name="addr2[0]">
<input type='text' name="addr1[0]"><input type='text' name="addr2[0]">

2. 수정요청시 지정 배열번호 특정하기
3. 
*/
exports.modifAddrs = (userid, address) =>{
    return promises((resolve, reject)=>{
        getConn((conn)=>{
            let sQuery = `Select * from users where userid=${userid}`;
            try{
            conn.query(sQuery, (err, result)=>{
                if(!err){
                        resolve(result);
                    }
                });
            }catch(err) {throw err;}
        })
    })
}
exports.deleteAddress = (userid, address) =>{
    
    return promises((resolve, reject)=>{
        getConn((conn)=>{
            let sQuery = `Delete from users where userid=${userid}`;
            try{
            conn.query(sQuery, (err, result)=>{
                if(!err){
                        resolve(result);
                    }
                });
            }catch(err) {throw err;}
        })
    })
}
