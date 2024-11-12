const mongoose=require("mongoose")
const authorModel=new mongoose.Schema({

    author_name:String,
    author_books:[{type:mongoose.Schema.Types.ObjectId,ref:'book'}]
})
module.exports=mongoose.model("author",authorModel)