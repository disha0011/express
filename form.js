const express = require("express");
const app = express();
const port = 4040;
app.use(express.json());
app.use(express.urlencoded());

app.get("/form",(req,res)=>{
 res.sendFile(__dirname +  "/form.html");
 });

//get through data querystring ma show

// app.get("/form",(req,res)=>{
// const request = req.query;
// console.log("data get",request);
// });

//post through data 
app.post("/form",(req,res)=>{
    const request = req.body;
    console.log("dataget",request);
    });

app.listen(port,()=>{
    console.log(`port is listening: ${port}`);
});