
const userModel=require("../models/UserModel")
const profileModel=require("../models/ProfileModel")

const homePage=async(req,res)=>{
    res.send("This is my home page")
}

// const insertPage=async(req,res)=>{
//    const{username,email,fname,sname}=req.body;
//    console.log(username,email,fname,sname);

//    const userData=await userModel.create({
//     username:username,
//     email:email
//    })
//    console.log(userData);

//    const profileData=await profileModel.create({
//     userid:userData._id,
//     firstname:fname,
//     secondname:sname
//    })
//    res.send("Data successfully Send!!")
// }

const insertPage=async(req,res)=>{
    const {username,email,fname,sname}=req.body;
    console.log(username,email,fname,sname);

    const userData=await userModel.create({
        username:username,
        email:email
    })
    console.log(userData);

    const profileData=await profileModel.create({
        userid:userData._id,
        firstname:fname,
        secondname:sname
    })
    res.send("Data successfully send!!!");
}
// const displayPage=async(req,res)=>{
//     const userData=await profileModel.find().populate("userid");
//     res.send(userData)
// }

const displayPage=async(req,res)=>{
    const userData=await profileModel.find().populate("userid")
    res.send(userData)
}
module.exports={
    homePage,
    insertPage,
    displayPage
}