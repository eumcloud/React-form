const getConn = require("./db");

exports.getCartlist = (userid) => {
    return new Promise((resolve, reject) => {
        console.log(`DB로 userid: ${userid} 가져옴`)
        
        getConn((err, conn) => {
            let sQuery = `SELECT c.cno, c.userid, c.id, u.no, u.userid, p.id, p.image, p.product, p.price, p.content
        FROM carts c 
            LEFT OUTER JOIN users u ON c.userid = u.userid
            LEFT OUTER JOIN Products p ON c.id = p.id
        WHERE  c.userid = '${userid}' `;
            console.log(`USERID: ${userid}`);
            // console.log(conn)
            try {
            // let sQuery = `select * from buys where userid='${userid}'`; // where userid =   //
            conn.query(sQuery, userid, (err, result, fields) => {
                console.log("333 "+ fields);
                console.log(`222 : ${userid}`)
                console.log("111" + result);
                    // console.log("userid: "+ userid);
                    // throw err;
                    // console.log("1234"+typeof(result));
                    // console.log("이거 맞음?", result); console.log(userid, sQuery);
                    // console.log("11 : "+resolve);
                    // console.log("쿼리 결과값 : " + typeof (result));
                });
                    // console.log("222")
            //     conn.release();
            } catch (err) {
                console.err(err);
            }
        // });
            // }
    })
})}


//Create
exports.addCart = (productid, userid) => {
    return new Promise((resolve, reject) => {
        getConn((conn) => {
            try {
                let sQuery = `INSERT INTO cart(id) values(${productid}) where userid =${userid}`;
                conn.query(sQuery, (err, result) => { resolve(result) });
                conn.release();
            } catch (err) { console.err(err); }
        })
    })
}

//UPDATE

exports.addCart = (productid, userid) => {
    return new Promise((resolve, reject) => {
        getConn((conn) => {
            try {
                let sQuery = `UPDATE carts SET options where id =${productid}`;
                conn.query(sQuery, (err, result) => { resolve(result) });
                conn.release();
            } catch (err) { console.err(err); }
        })
    })
}



//Delete
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


