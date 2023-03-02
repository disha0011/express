//express js 

const express=require("express");
dash=express.Router();

dash.get("/",(req,res)=>{
res.json({"msg":"hello dashboard"});
});

dash.post("/dash",(req,res)=>{
    console.log(req.body);
 });


module.exports = dash;