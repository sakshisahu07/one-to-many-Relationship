const express= require("express");
const route= express.Router();
const bookController= require("../controllers/bookController");
route.post("/booksave",  bookController.bookSave);

route.get("/booksdisplay",  bookController.bookDisplay);

route.post("/morebookadd",  bookController.morebookAdd);

module.exports=route;