

const express=require("express");
const app=express();
const bodyparser = require('body-parser')
const cors=require("cors");
const mongoose=require("mongoose");
const employeeRoute=require("./routes/empRoute")
require("dotenv").config();
mongoose.connect(process.env.DBCONNECTION).then(()=>{
    console.log("MongoDB successfully connected!!")
})
const port=process.env.PORT || 3000
app.use(cors());
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use("/employee",employeeRoute)

app.listen(8080,(req,res)=>{
    console.log("server Runs on this port")
})

