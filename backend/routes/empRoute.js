


const express=require("express");
const route=express.Router();
const employeeController=require("../controllers/empController")

route.get("/home",employeeController.homePage)
route.post("/insert",employeeController.insertPage)
route.get("/display",employeeController.displayPage);
route.post("/search",employeeController.searchPage);
route.get("/update",employeeController.updatePage);
route.post("/edit",employeeController.editPage);
route.post("/delete",employeeController.deletePage);
route.post("/editsave",employeeController.editSave);
route.post("/login",employeeController.loginPage);








module.exports=route;