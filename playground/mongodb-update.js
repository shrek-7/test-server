const {MongoClient,ObjectID} = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/Prototype',(err,db) =>{
    if(err){
        return console.log("Unable to connect to mondoDB server");
    }
    console.log("Connected to MongoDB Server");

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5aa817f16d032b3a1863f8dd')
    },{
        $set: {
            name: "Asthana"
        },
        $inc:{
            age: -3
        }
    },{
        returnOriginal: false
    }).then((result) =>{
        console.log(result);
    });

    // db.close()
});