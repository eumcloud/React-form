const getConn = require("../db");

exports.getBuylist = (userid)=>{
    return new Promise((resolve, reject)=>{

        try{
                getConn((conn)=>{
                    console.log("buylistDAO로 넘어온 userid :", userid);
                // let sQuery = `select * from Products`;
                    let sQuery = `SELECT b.cno, u.userid,  
                    p.id, p.image, p.product, p.price, p.content
                FROM buys b 
                    LEFT OUTER JOIN users u ON b.userid = u.userid
                    LEFT OUTER JOIN Products p ON b.id = p.id
                WHERE  u.userid = '${userid}'`;
                conn.query(sQuery, (err, result)=>{
                    resolve(result);
                    console.log("getBuylist() 결과값 :", result);
                });
            })
        }catch(err) {
                console.error(err);
                // reject("--------쿼리가 안돌아감. 확인필요--------")
        }
        
    })
}
