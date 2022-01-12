// const db = require("./db");
const db = require("mysql");
require("dotenv").config();

const configs = {
   database: "testDB",
   host: "54.180.127.20",
   port: "3306",
   user: "test",
   password: "1234"
}
const pool = db.createPool(configs)

const getConn = function (callback){
   pool.getConnection((err, conn)=>{
   if(err) throw err;
   console.log("Conn for Cart func..");
   callback(conn)
})
}

exports.getCartlist = function getCartlists(id){
    let resp;
   getConn((conn)=>{
       let sQuery = `Select * from Products`;
       conn.query(sQuery, (err, result)=>{
           console.log(result);
           resp = result;
       });
       conn.release();
   }) 
    return resp;
}

exports.addCart = (productid, userid)=>{
    let resp;
   let sQuery = `INSERT INTO cart(id) values(${productid}) where userid =${userid}`;
   getConn((conn)=>{
       conn.query(sQuery, (err, result)=>{
           console.log(result);
           resp = result;
       });
       conn.release();
   }) 
    return resp;
}

exports.deleteItem = (productid, userid)=>{
    let resp;
   let sQuery = `INSERT INTO cart(id) values(${productid}) where userid =${userid}`;
   getConn((conn)=>{
       conn.query(sQuery, (err, result)=>{
           console.log(result);
           resp = result;
       });
       conn.release();
   }) 
    return resp;
}