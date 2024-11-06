const express=require("express");
const app=express();
const bodyparser = require('body-parser');
const cors = require("cors");
const mongoose=require("mongoose");
require("dotenv").config();
const employeeRoute=require("./routes/empRoute")

mongoose.connect(process.env.DBCON).then(()=>{
    console.log("mongodb successfully connected!!!")
});
const port=process.env.PORT || 3000
app.use(cors());
//body parser middleware
app.use(bodyparser.urlencoded({ extended:true}))
app.use(bodyparser.json())

app.get("/upload",(req,res)=>{
    res.send("Uploaded")
})

app.get("*",(req,res)=>{
    console.log("path not found")
})
app.use("/employee",employeeRoute)
app.listen(8000,()=>{
    console.log("server runs on this port")
})
