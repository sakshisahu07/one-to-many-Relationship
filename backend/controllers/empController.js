
const employeeModel=require("../models/empModel")
const homePage=(req,res)=>{
    res.send("<h1>This is my home page");
}
const insertPage=(req,res)=>{
    res.send("<h1>Employee data inserted");
}
const displayPage=(req,res)=>{
    res.send("<h1>displayed Employee records");
}

module.exports={
    homePage,
    insertPage,
    displayPage
}