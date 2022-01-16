const getConn = require("./db");

exports.modifyAddress = (userid) => {
    return new Promise((resolve, reject) => {
        getConn((conn) => {
            try {
                let sQuery = `Delete from users where userid = ${userid}`;
                conn.query(sQuery, (err, result) => { resolve(result) });
                conn.release();
            } catch (err) { console.err(err); }
        })
    })
}