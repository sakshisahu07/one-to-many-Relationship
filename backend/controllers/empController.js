
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

const searchPage=async(req,res)=>{
    let{empno}=req.body;
    const myData=await employeeModel.find({empno:empno})
    //console.log(myData)
    res.send(myData)
}

const updatePage=async(req,res)=>{
    const Data=await employeeModel.find();
    res.send(Data);
    
}
const editPage=async(req,res)=>{
    const id=req.body.id;
    const empdata=await employeeModel.findById(id);
    res.send(empdata);
}

const deletePage=async(req,res)=>{
    const myid=req.body.id;
    const emplo=await employeeModel.findByIdAndDelete(myid);
    res.send("Record Deleted")
}
module.exports={
    homePage,
    insertPage,
    displayPage,
    searchPage,
    updatePage,
    editPage,
    deletePage
}