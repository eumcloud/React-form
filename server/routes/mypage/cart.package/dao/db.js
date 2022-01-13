const { default: axios } = require("axios");
const db = require("mysql");
require("dotenv").config();

const configs = {
   // database: process.env.DB,
   // host: process.env.DBHOST,
   // port: process.env.DBPORT,
   // user: process.env.USER,
   // password: process.env.PASS,

   host: "54.180.127.20",
   user: "test",
   password: "1234",
   port: "3306",
   database: "testDB",
   connectionlimit: 100,
}
const pool = db.createPool(configs)

const getConn =  (callback) => {
   pool.getConnection((err, conn) => {
      // console.log(conn);

   if(err) throw err;
   else{
      console.log("DB Conn!" /*, conn */);
      
      
      callback(err, conn);
      // console.log(conn.query());
   }
})
}

// getConn();


module.exports = getConn;