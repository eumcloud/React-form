const express = require("express");
const app = express();
const path = require("path");

const boards = require("./src/routes/board/Board");
const products = require("./src/routes/product/Product");
const mains = require("./src/routes/main/Main");
const mypages = require("./src/routes/mypage/Mypage");

app.use(express.static(path.join(__dirname, 'build')));

app.use("/board", boards);
app.use("/product", products);
app.use("/main", mains);
app.use("/mypage", mypages);

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "build/index.html"));
});

const host = "127.0.0.1";
const port = 3000;
app.listen(port, ()=>{
    console.log(`ReactProject is running  ---http://${host}:${port}`);
});
