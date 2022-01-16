const getConn = require("./db");
const bcrypt = require("bcryptjs");

exports.modifyPassword = async (userid, getPwd) => {
    let hashedPwd = await bcrypt.hash(getPwd, 8);
    return new Promise((resolve, reject) => {
        getConn((conn) => {
            try {
                let sQuery = `UPDATE users SET userpwd=${hashedPwd} where userid=${userid}`; 
                conn.query(sQuery, (err, result) => { resolve(result) });
                conn.release();
            } catch (err) { console.err(err); }
        })
    })
}