const express=require("express");

const app=express();
const 


const url=require("./models/all");
var cors = require('cors');
app.use(cors());
const uuid=require('uuid');
app.use(express.json());
app.use(express.urlencoded());

app.get("/",(req,res)=>{


    res.send("Hi");
})
app.post("/",(req,res)=>{

    let newid=(uuid.v1());
    const originalUrl=(req.body.link);
    console.log(typeof(originalUrl));
      console.log(typeof(newid));
  res.send({newid:newid});


    const newLink=new url({

        currentUrl: originalUrl,
        shortenedUrl:newid});



        newLink.save(function (error) {
            if (error) {
              console.log(error);
            } else {
              console.log('Successfully saved document to the database.');
            }
          });
});




app.get("/:id",(req,res)=>{
const um=req.params.id;
console.log(um);

    url.findOne({shortenedUrl:um},(error,Url)=>{

const originalLink=Url.currentUrl;
console.log(originalLink);
        if(error)
        {
           console.log(error);
        }
        else
        {
        //  console.log(typeof(originalLink));
            res.redirect(originalLink);  
        }      
    });
   
});
app.listen(process.env.PORT,()=>{


    console.log("listening ");
})

