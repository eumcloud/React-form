const db = require("mysql");
require("dotenv").config();
const configs = require("./database.json")
// const configs = {
//    database: process.env.DB,
//    host: process.env.DBHOST,
//    port: process.env.DBPORT,
//    user: process.env.USER,
//    password: process.env.PASS
// }
const pool = db.createPool(configs)

const getConn =  function (callback){
   pool.getConnection((err, conn)=>{
   if(err) throw err;
   console.log("DB Pool!");
    callback(conn)

})
}


module.exports = getConn;