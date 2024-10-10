const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("<h1>hello everone!!!!")
})
app.listen(8000,()=>{
    console.log("server runs on this port")
})