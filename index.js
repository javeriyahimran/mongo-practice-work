const mongoose=require("mongoose")
const StudentSchema=require("./models/students.models1")

mongoose.connect("mongodb+srv://me2:1234@cluster0.k8ux1za.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
//first mongodb ka mean h k woh mongodb h or localhost hamry pc ki jo loalhost h woh or / be_demodb yani database ka nam

const db= mongoose.connection //iska mtlb h k hm mongoose se connect krwarhy h

//ab hmrey pas do ooptions hongy yani 2 kism k respinse honge ya tou connect k time error ya phr successfully connect

db.once("open",()=>{
    console.log("succesfully connected to DB")
    })

    init() //ya create krny k liye h
    dbQueries() //ua read krny k liye h




db.on("error",()=>{
    console.log("error while conneting to DB")
})

async function init(){
    //logic to insert data in DB
    const student={ //ab hm yaha b changing krege q k hm ny wahhan email ps ki h subjects diye h tou ab yaha woh banege
        name:"Javeriyah",
        age:20,
        subjects:["maths","english"],
        email:"javeriyah@gmail.com"
}


    const std_obj = await StudentSchema.create(student)
console.log(std_obj)
}


async function dbQueries(){
    console.log("inside the dbqueris function")
    try{
const student=await StudentSchema.findById("65fb112e8c5d5578d1fd6dee")//agr yha ghlt id dege tou null value ayegi.agr hm find k bd koi value na de tou woh hmen sari values dedega.

console.log(student)
    }catch(error){
console.log(error)
    }
const stds=await StudentSchema.where("age").gt("10").where("name").equals("Javeriyah").limit(2)
console.log(stds)

const studentss=await StudentSchema.deleteOne({name:"Javeriyah"})
console.log(studentss)
 }


//ya multiple ya complez queries k liye h k age greter than ho 10 se nanme equals ho Javeriyah k or limit 2
//ho ab agr isko javeriyah k 10 records b milege phr b ya 2 hi dekhyega.
//ya where clause hoty h.
