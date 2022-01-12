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

exports.getDMlist = function getCartlists(id){
    let resp;
   getConn((conn)=>{
       let sQuery = `Select * from DirectBoard`;
       conn.query(sQuery, (err, result)=>{
           console.log(result);
           resp = result;
       });
       conn.release();
   }) 
    return resp;
}

exports.addDM = (dm, userid)=>{
    let resp;
   let sQuery = `INSERT INTO DirectBoard(id, title, desc, updatetime) values(${dm.id}, ${dm.title}, ${dm.desc}, ${dm.date}) where dno =${dm.no}`;
   getConn((conn)=>{
       conn.query(sQuery, (err, result)=>{
           console.log(result);
           resp = result;
       });
       conn.release();
   }) 
    return resp;
}

exports.modifyDM = (dm, userid)=>{
    let resp;
   let sQuery = `UPDATE INTO DirectBoard(id, title, desc, updatetime) SET(${dm.id}, ${dm.title}, ${dm.desc}, ${dm.date}) where dno =${dm.no}`;
   getConn((conn)=>{
       conn.query(sQuery, (err, result)=>{
           console.log(result);
           resp = result;
       });
       conn.release();
   }) 
    return resp;
}
DELETE FROM CORPDATA.EMPLOYEE
     WHERE WORKDEPT = 'D11'
exports.deleteItem = (dno, userid)=>{
    let resp;
   let sQuery = `Delete from DirectBoard where no=${dm.no}`;
   getConn((conn)=>{
       conn.query(sQuery, (err, result)=>{
           console.log(result);
           resp = result;
       });
       conn.release();
   }) 
    return resp;
}