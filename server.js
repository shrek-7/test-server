const express = require("express");
const port =process.env.PORT || 3000;

var app=express();

app.use(express.static(__dirname + "/public"));

app.get("/",(req,res)=>{
    res.send({
        name:"Shreyas",
        office:["seatle","bangalore"],
        place:{
            city:"varanasi",
            pinCode:"221007"
        }
    });
})

app.get("/bad",(req,res)=>{
    res.send({
        error:{
            status:true,
            message:"Something went wrong!"
        }
    })
})


app.listen(port,()=>{
    console.log(`kuch kuch hota hai on port : ${port}`);
});