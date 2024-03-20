const mongoose=require("mongoose")

const StudentSchema=new mongoose.Schema({
    name:String,
    age:Number,
    
})

const Students=mongoose.model("students",StudentSchema)
module.exports=Students

//ya hmny pora schema tayyr kiya h is mai name string or age number ki for mai h
//phr hmny usy export kiya h yani ab hm isko khen se b call krskty h.
