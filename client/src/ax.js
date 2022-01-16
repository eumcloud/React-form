const axios = require("axios");
function api(path){
    axios.get("https://localhost:3001"+ path)
    .then(resp =>{
       console.log(resp);
       
    })
    .catch(err =>{
       console.log(err);
    })
 }
 
 module.exports = api;