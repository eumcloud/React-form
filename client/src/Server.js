const express = require("express");
const app = express();
const path = require("path");
const mysql = require("mysql");
const dotenv = require("dotenv");
const exp = require("constants");
const cookieParser = require("cookie-parser");
const router = express.Router();
const authController = require('../src/controllers/auth');
const port = 3001;
app.use(express.json());
var cors = require('cors');
app.use(cors());

dotenv.config({ path: './.env'});

const db = mysql.createConnection({              
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});
         

const publicDirectory = path.join(__dirname, '/public');  
app.use(express.static(publicDirectory));   
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

db.connect((err) => {                           
    if(err) throw err;

    console.log("MySQL Conected!!!");
});



app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
    console.log('index rendered');
  });              

  app.use('/auth', require('./routes/auth'));


// app.use('/', require('./routes/pages'));
// app.use('/auth', require('./routes/auth'));
app.listen(port, () => {
    console.log(`Server is running at ${port}`)
});