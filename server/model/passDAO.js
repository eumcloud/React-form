const getConn = require("./db");
const bcrypt = require("bcryptjs");

exports.modifyPassword = async (userid, getPwd) => {
    let pwd = getPwd.toString()
    console.log(pwd);
    let hashedPwd = await bcrypt.hash(pwd.toString(), 8);
    console.log(hashedPwd);
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