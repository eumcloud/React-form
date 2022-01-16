const getConn = require("./db");

exports.modifyPassword = (userid, getPwd) => {
    return new Promise((resolve, reject) => {
        getConn((conn) => {
            try {
                let sQuery = `UPDATE users SET userpwd=${getPwd} where userid=${userid}`; 
                conn.query(sQuery, (err, result) => { resolve(result) });
                conn.release();
            } catch (err) { console.err(err); }
        })
    })
}