

const express=require("express");
const route=express.Router()
const employeeController=require("../controllers/empController")

route.get("/home",employeeController.homePage);
route.post("/insert",employeeController.insertPage);
route.get("/display",employeeController.displayPage);

module.exports=route;