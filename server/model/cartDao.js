const getConn = require("../routes/mypage/cart.package/dao/db");

exports.getCartlist = (userid) => {
    return new Promise((resolve, reject) => {
        console.log(`DB로 userid: ${userid} 가져옴`)
        
        getConn((err, conn) => {
            console.log(`USERID: ${userid}`);
            // console.log(conn)
            try {
                let sQuery = `SELECT b.userid, b.id, b.tradeDate, p.image, p.product, p.price, p.content, p.realprice
                FROM 
                Mbuylist b
                    LEFT JOIN Products p ON p.id = b.id WHERE userid = '${userid}';
                `;
            // let sQuery = `select * from buys where userid='${userid}'`; // where userid =   //
            conn.query(sQuery,  (err, result, fields) => {
                resolve(result);
                });
                
            } catch (err) {
                console.err(err);
            }

    })
})}

exports.addCart = (productid, userid) => {
    return new Promise((resolve, reject) => {
        getConn((conn) => {
            try {
                let sQuery = `INSERT INTO cart(id) values('${productid}') where userid ='${userid}'`;
                conn.query(sQuery, (err, result) => { resolve(result) });
                conn.release();
            } catch (err) { console.err(err); }
        })
    })
}
exports.deleteItem = (productid, userid) => {
    console.log(`DB에서 상품넘버 - ${productid} && 고객정보 - ${userid}값을 가져옴.`)
    return new Promise((resolve, reject) => {
        getConn((conn) => {
            try {
                let sQuery = `DELETE FROM cart WHERE id=${productid} AND userid =${userid} `;
                conn.query(sQuery, (err, result) => { resolve(result) });
                // console.log(AffectedRows);
                console.log(`DB에서 ${productid}값으로 해당 정보를 제거함`)
                conn.release();
            } catch (err) { console.err(err); }
        })
    })
}


