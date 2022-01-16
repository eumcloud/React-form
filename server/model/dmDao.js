const getConn = require("./db");

exports.getDMlist = function getDMlist(userid){
return new Promise((resolve, reject)=>{
   getConn((conn)=>{
       let sQuery = `SELECT * FROM MdirectBoard where userid='${userid}'`;
       conn.query(sQuery, (err, result)=>{
           console.log(result);
          resolve( result);
       });
       conn.release();
   }) 
})
}

exports.addDM = (dm, userid)=>{
    return new Promise((resolve, reject)=>{
   let sQuery = `INSERT INTO MdirectBoard
   (userid,    type,    title,    desc) VALUES ('${dm.userid}','${dm.type}', '${dm.title}', '${dm.desc}') `;
   getConn((conn)=>{
        conn.query(sQuery, (err, result)=>{
          console.log(result);
          resolve( result);
       });
       conn.release();
   }) 
}) 
}

exports.modifyDM = (dm, userid)=>{
    return new Promise((resolve, reject)=>{
        let sQuery = `UPDATE MdirectBoard
        SET userid = '${userid}', type = '${dm.type}', title = '${dm.title}', desc = '${dm.desc}', updateTime= ${now()}
        WHERE no = ${dm.no}`;
        getConn((conn)=>{
            conn.query(sQuery, (err, result, fields)=>{
                console.log(fields);
                resolve(result);
            });
            conn.release();
        }) 
    })
}

     
exports.deleteItem = (dno, userid)=>{
    return new Promise((resolve, reject)=>{
    let sQuery = `DELETE FROM MdirectBoard WHERE no = ${dno}`;
    getConn((conn)=>{
       conn.query(sQuery, (err, result)=>{
           console.log(result);
           resolve(result);
       });
       conn.release();
    })
    })
}