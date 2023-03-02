//express js 

const express=require("express");
const app = express();
const port = 9090;

//localhost:9090
app.get("/",(req,res)=>{
   res.json({msg : "hello world"});
   console.log("hellow");
});


//aa thunder client ma 
app.post("/",(req,res)=>{
    res.json({msg : "hello post"});
    console.log("hellow post");
 });


app.listen(port,()=>{
    console.log(`server listening port ${port}`);
});