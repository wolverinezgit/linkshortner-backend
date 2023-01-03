
const mongoose=require("mongoose");
require("dotenv").config();
const uuid=require("uuid");
const db=()=>{
    mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true }).then(console.log("Connected to Database")).catch((error)=>console.log(error));

const Schema=mongoose.Schema(

    {
currentUrl:String,

shortenedUrl:String

    });
    
const url=mongoose.model("url",Schema);
module.exports=url;

}
db();


