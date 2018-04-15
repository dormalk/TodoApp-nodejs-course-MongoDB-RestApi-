const {MongoClient,ObjectID}  = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/", (err,database) => {
  if(err){
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");
  const db = database.db("TodoApp");

  //findOneAndUpdate
  // db.collection("Todos").findOneAndUpdate({
  //   _id:new ObjectID("5ac396747251e5d39e5c46f7")
  // },{
  //   $set:{
  //     completed:true
  //   }
  // },{
  //   returnOriginal:false
  // }).then((resulte)=>{
  //   console.log(resulte);
  // });

  db.collection("Users").findOneAndUpdate({
    name: "Dor"
  },{
    $inc:{
      age: 1
    }
  },{
    returnOriginal:false
  }).then((resulte)=>{
    console.log(resulte);
  });
  //database.close();
});
