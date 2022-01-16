const axios = require("axios");
const api = axios.create({baseURL: "https://localhost:3001", })
   //  .then(resp =>{
   //     console.log(resp);
       
   //  })
   //  .catch(err =>{
   //     console.log(err);
   //  })
 
 
 module.exports = api;