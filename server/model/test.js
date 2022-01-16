const getConn = require("./db");
const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    const userid = 'last';
    // const address = [{idx:2, addr1: "1234", addr2:"2234"}];
    
    let address = ["서울 강남구 논현동 | 234-12", "서울 강동구 천호동 | 111-222"];
    

    return new Promise((resolve, reject) =>{
        try{
        getConn((conn)=>{
            let sQuery = `UPDATE users SET address=${address} where userid = ${userid}`;
            conn.query(sQuery, (err, result)=>{
                resolve(result);
                console.log( result);
                res.send(result)
            })
            conn.release();
        })
        }catch (err) { throw err;}
    })
})
const port = 3002
app.listen(port, ()=>{
    console.log(`Application test http://localhost:${port}`);
})
exports.test = () => {
    return new Promise((resolve, reject) => {
        getConn((conn) => {
            try {
                let sQuery = `UPDATE * from Products `; //where userid='${id}'
                conn.query(sQuery, (err, result) => { resolve(result) });
                conn.release();
            } catch (err) { console.err(err); }
        })
    })
}