const getConn = require("./db");

exports.getCartlist = (userid) => {
    return new Promise((resolve, reject) => {
        getConn((conn) => {
            try {
                let sQuery = `Select c.cno, c.userid, c.id, p.image, p.product, p.price, p.content, p.realprice from Mcart c left join Products p on p.id = c.id where userid='${userid}' `; 
                conn.query(sQuery, (err, result) => { resolve(result) });
                conn.release();
            } catch (err) { console.err(err); }
        })
    })
}


exports.addCartItem = (productid, userid) => {
    return new Promise((resolve, reject) => {
        getConn((conn) => {
            try {
                    let sQuery = `INSERT INTO Mcart (userid, id) VALUES ('${userid}', ${productid});`;
                conn.query(sQuery, (err, result) => { resolve(result) });
                conn.release();
            } catch (err) { console.err(err); }
        })
    })
}
exports.modifyCart = (userid, productid, amount, options) => {
    return new Promise((resolve, reject) => {
        getConn((conn) => {
            try {
                    let sQuery = `UPDATE Mcart
                    SET
                         amount =${amount},
                        options = '${options}'
                    WHERE id = ${productid} and userid='${userid}'`;
                conn.query(sQuery, (err, result) => { resolve(result) });
                conn.release();
            } catch (err) { console.err(err); }
        })
    })
}
exports.deleteCartItem = ( userid, cno) => {
    console.log(`DB에서 고객정보 cno : ${cno}값을 가져옴.`)
    return new Promise((resolve, reject) => {
        getConn((conn) => {
            try {
                let sQuery = `DELETE FROM Mcart WHERE cno = ${cno}`;
                conn.query(sQuery, (err, result) => { resolve(result) });
                // console.log(AffectedRows);
                console.log(`DB에서 cno: ${cno}값으로 해당 정보를 제거함`)
                conn.release();
            } catch (err) { console.err(err); }
        })
    })
}


