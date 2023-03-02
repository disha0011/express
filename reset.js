
const express=require("express");
reset=express.Router();

reset.use(express.json());
reset.use(express.urlencoded());

reset.get("/",(req,res)=>{
res.sendFile(__dirname +  "/reset.html");
});

reset.post("/",(req,res)=>{
    const request = req.body;
    console.log(request.uname);
    console.log(request.password);
    if(uname==="disha" && password===123){
        console.log("password is correct...");
    
    }
    else{
        console.log("password is not correct...");
    }

});




module.exports = reset;