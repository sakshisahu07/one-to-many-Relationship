
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
const displayPage=async(req,res)=>{
   const empdata=await employeeModel.find();
    res.status(200).json(empdata);
}

module.exports={
    homePage,
    insertPage,
    displayPage
}