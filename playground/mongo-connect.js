const {MongoClient}  = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/", (err,database) => {
  if(err){
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");
  
  database.db("TodoApp").collection("Todos").insertOne({
    text: "Do something",
    completed: false
  }, (err,resulte) => {
    if(err){
      return console.log("Unable to insert recored to MongoDB");
    }
    console.log(JSON.stringify(resulte.ops,undefined,2));
  });


  database.db("TodoApp").collection("Users").insertOne({
    name: "Roni",
    age: 56,
    location: "Tel Aviv"
  },(err,resulte) => {
    if(err){
      return console.log("Uable to insert new recored to MongoDB",err);
    }
    console.log(JSON.stringify(resulte.ops,undefined,2));
  });
  database.close();
});
