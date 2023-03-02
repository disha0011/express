const express=require("express");
const app = express();
const port = 3030;

app.use(express.json());

app.get("/",(req,res)=>{
   res.json({msg : "hello world"});
  });


//aa 2 line add kri che.
const getlogin=require("./getlogin");
app.use("/getlogin",getlogin)

//aa dash mate kryu che.
const dash=require("./dash")
app.use("/dash",dash)

//aa reset mate kryu che.
const reset=require("./reset")
app.use("/reset",reset)

app.listen(port,()=>{
    console.log(`server listening port ${port}`);
});