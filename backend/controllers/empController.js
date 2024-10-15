
const employeeModel=require("../models/empModel")
const homePage=(req,res)=>{
    res.send("<h1>This is my home page");
}
const insertPage=async(req,res)=>{
    const {eno,name,designation,salary}=req.body;
    try{
        const Employee=await employeeModel.create({
            empno:eno,
            empname:name,
            designation:designation,
            salary:salary
        })
        res.status(200).json(Employee);
    }catch(error){
        res.status(404).json("Mongo server not found!!")
    }
    
}
const displayPage=(req,res)=>{
    res.send("<h1>displayed Employee records");
}

module.exports={
    homePage,
    insertPage,
    displayPage
}