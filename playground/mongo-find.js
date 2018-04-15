const {MongoClient}  = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/", (err,database) => {
  if(err){
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");
  //
  // database.db("TodoApp").collection("Todos").find().toArray().then((docs) => {
  //     console.log("Todos");
  //     console.log(JSON.stringify(docs,undefined,2));
  // }, (err) => {
  //   console.log("Unable fetch from MongoDB",err);
  // });

  database.db("TodoApp").collection("Users").find({name: "Dor Malka"}).toArray().then((docs) => {
    console.log("Users");
    console.log(JSON.stringify(docs,undefined,2));
  }, (err) => {
    console.log("Unable fetch from MongoDB",err);
  });

  database.close();
});
