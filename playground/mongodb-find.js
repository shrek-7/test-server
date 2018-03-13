const MongoClient = require("mongodb").MongoClient;

MongoClient.connect('mongodb://localhost:27017/Prototype',(err,db) =>{
    if(err){
        return console.log("Unable to connect to mondoDB server");
    }
    console.log("Connected to MongoDB Server");

    db.collection('Users').find({name: "shibu"}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs, undefined, 2));
    },(err)=>{
        console.log("uanble to fetch data",err);
    })

    // db.close()
});