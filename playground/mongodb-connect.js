const MongoClient = require("mongodb").MongoClient;

MongoClient.connect('mongodb://localhost:27017/Prototype',(err,db) =>{
    if(err){
        return console.log("Unable to connect to mondoDB server");
    }
    console.log("Connected to MongoDB Server");

    // db.collection('TodoList').insertOne({
    //     text: "Next what to do",
    //     completed: false
    // },(err,result)=>{
    //     if(err){
    //         return console.log("Unable to insert in the list", err)
    //     }

        // console.log(JSON.stringify(result.ops, undefined, 2));

    db.collection('Users').insertOne({
        name: "twinkle",
        age: 24,
        location: "Bangalore"
    }, (err,result) =>{
        if(err){
            return console.log("Unable to add collection");
        }

        console.log(result.ops[0]._id.getTimestamp());
    });

    db.close()
});