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

app.get("/home",(req,res)=>{
    try {
        let a=10;
        let b=2;
        if(b==0){
            throw new Error("Aap zero se divide na kare pls!!")
        }
        let c=a/b;
        res.send({ans:c});
    } catch (error) {
       
    }
})

app.get("/about",(req,res)=>{
    res.send("About us!!")
})


app.use("/employee",employeeRoute)
app.listen(8000,()=>{
    console.log("server runs on this port")
})
