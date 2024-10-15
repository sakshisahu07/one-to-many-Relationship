const express=require("express");
const app=express();
const bodyparser = require('body-parser');
const cors = require("cors");
const mongoose=require("mongoose");
require("dotenv").config();
const employeeRoute=require("./routes/empRoute")

mongoose.connect("mongodb://127.0.0.1:27017/SakshiMern").then(()=>{
    console.log("mongodb successfully connected!!!")
});
const port=process.env.PORT || 3000
app.use(cors());
//body parser middleware
app.use(bodyparser.urlencoded({ extended:true}))
app.use(bodyparser.json())
app.use("/employee",employeeRoute)
app.listen(8000,()=>{
    console.log("server runs on this port")
})