const express = require("express");
const app = express();
<<<<<<< HEAD
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cookieParser = require("cookie-parser");
const fs = require("fs")
const auth = require("./routes/auth");
const mypages = require("./routes/mypage");
const board = require("./routes/board")
const port = 3001;
const cors = require("cors");
const authController = require('./controllers/auth');
=======
const path = require("path");
>>>>>>> baa8dabcfb04fefdef0f38d4bdac1299b30092e7

const boards = require("./router/board/Board");
const products = require("./router/product/Product");
const mains = require("./router/main/Main");
const mypages = require("./router/mypage/Mypage");

app.use(express.static(path.join(__dirname, 'build')));
app.use("/board", boards);
app.use("/product", products);
app.use("/main", mains);
app.use("/mypage", mypages);

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "build/index.html"));
});

app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "build/index.html"));
});


const host = process.env.NODEHOST || "127.0.0.1";
const port = process.env.NODEPORT || 5000;
app.listen(port, ()=>{
    console.log(`ReactProject is running  ---http://${host}:${port}`);
});