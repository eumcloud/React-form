const getConn = require("./db");

exports.getDMList = (userid)=>{
return new Promise((resolve, reject)=>{
   getConn((conn)=>{
       try{
       let sQuery = `SELECT * FROM MdirectMsg where userid='${userid}'`;
       conn.query(sQuery, (err, result, fields)=>{
           console.log(result);
          resolve( result);
       });
       conn.release();
    }catch (err) { throw err;}
   }) 
})
}

exports.writeDM = (userid, dm )=>{
    return new Promise((resolve, reject)=>{
   let sQuery = `INSERT INTO MdirectMsg (
    userid, qtype, title, descript, createTime
    ) VALUES ('${userid}', '${dm.qtype}', '${dm.title}', '${dm.descript}', sysdate())
    `;
    
   getConn((conn)=>{
       try{
        conn.query(sQuery, (err, result, fields)=>{
          console.log("fields",fields);
          resolve( result);
       });
       conn.release();
    } catch (err) {throw err;}
   }) 
}) 
}

exports.modifyDM = (userid, dm)=>{
    return new Promise((resolve, reject)=>{
        let sQuery = `UPDATE MdirectMsg SET qtype = '${dm.qtype}', title= '${dm.title}', descript='${dm.descript}', updateTime=SYSDATE() WHERE userid = '${userid}' AND no=${dm.no}`;
        getConn((conn)=>{
            conn.query(sQuery, (err, result, fields)=>{
                console.log("fields",fields);
                resolve(result);
            });
            conn.release();
        }) 
    })
}

     
exports.deleteDM = (userid, no)=>{
    return new Promise((resolve, reject)=>{
    let sQuery = `DELETE FROM MdirectMsg WHERE no = ${no} and userid='${userid}'`;
    getConn((conn)=>{
       conn.query(sQuery, (err, result, fields)=>{
           console.log("fields", fields);
           resolve(result);
       });
       conn.release();
    })
    })
}