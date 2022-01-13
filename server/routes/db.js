const { default: axios } = require("axios");
const db = require("mysql");
require("dotenv").config();

const configs = {
   database: process.env.DB,
   host: process.env.DBHOST,
   port: process.env.DBPORT,
   user: process.env.USER,
   password: process.env.PASS
}
const pool = db.createPool(configs)

function getConn(callback){
   pool.getConnection((err, conn)=>{
   if(err) throw err;
   console.log("DB Conn!");
   callback(conn)

})
}


module.exports = getConn;