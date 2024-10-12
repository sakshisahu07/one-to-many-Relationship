const express=require("express");
const app=express();
const employeeRoute=require("./routes/empRoute")
const mongoose=require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/employeedata").then(()=>{
    console.log("mongodb successfully connected!!!")
})

app.use("/employee",employeeRoute)
app.listen(8000,()=>{
    console.log("server runs on this port")
})