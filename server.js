const express = require("express");
const app = express();
const path = require("path");

const boards = require("./routes/board/Board");
const products = require("./routes/product/Product");
const mains = require("./routes/main/Main");
const mypages = require("./routes/mypage/Mypage");

app.use(express.static(path.join(__dirname, 'build')));
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
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


const host = "127.0.0.1";
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`ReactProject is running  ---http://${host}:${port}`);
});