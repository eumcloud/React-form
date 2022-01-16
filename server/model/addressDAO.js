const getConn = require("./db");

exports.modifyAddress = (userid, address) => {
    return new Promise((resolve, reject) => {
        getConn((conn) => {
            try {
                let sQuery = `UPDATE userAddrs SET addrs=${address} where userid=${userid}`; //where userid='${id}'
                conn.query(sQuery, (err, result) => { resolve(result) });
                conn.release();
            } catch (err) { console.err(err); }
        })
    })
}