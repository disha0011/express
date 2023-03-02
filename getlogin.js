//express js 
const express=require("express");
getlogin=express.Router();


getlogin.use(express.json());
getlogin.use(express.urlencoded());

getlogin.get("/",(req,res)=>{
    res.sendFile(__dirname + "/getlogin.html");
});

getlogin.post("/",(req,res)=>{
       console.log(req.body);
});


module.exports = getlogin;