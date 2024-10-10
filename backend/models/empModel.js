
const mongoose=require("mongoose")
const empSchema=new mongoose.Schema({
    empno:{
        type:Number,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    designaton:{
        type:String,
        require:false
    },
    salary:{
        type:Number,
        require:true
    }
})
Module.exports=mongoose.model("employee",empSchema);