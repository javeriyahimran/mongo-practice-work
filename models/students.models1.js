const mongoose=require("mongoose")

const StudentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        min:19//yha min yani minimum age 19 honi chiye us se km pr seve ni hoga db mai
},
email:{
    type:String,
    required:true,
    lowercase:true,
    min:15//yani minimum 15 characters hony chiye mail k or woh usko lowercase mai kr k phr db mai save krega
},
subjects:[String]


//subjects string form mai hongy yani array form mai hi save hongy db mai

},(versionKey=false,timestamps=true))//ya version jo dekha rha h mongoose usko hatny k liye h ya versionkey or timestamps hmen created or updated ka time btaty h


const Students=mongoose.model("students",StudentSchema)
module.exports=Students

//ya hmny pora schema tayyr kiya h is mai name string or age number ki for mai h
//phr hmny usy export kiya h yani ab hm isko khen se b call krskty h.
