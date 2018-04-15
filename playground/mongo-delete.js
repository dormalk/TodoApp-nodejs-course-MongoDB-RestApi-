const {MongoClient}  = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/", (err,database) => {
  if(err){
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");
  const db = database.db("TodoApp");

  //deleteMany
  // db.collection("Todos").deleteMany({text:"Eat lnunch"}).then((resulte) => {
  //   console.log(resulte);
  // });
  //deleteOne
  // db.collection("Todos").deleteOne({text:"Eat lunch"}).then((resulte) => {
  //   console.log(resulte);
  // });
  //fineOneAndDelete
  // db.collection("Todos").findOneAndDelete({completed:false}).then((resulte)=>{
  //   console.log(resulte);
  // })

  // db.collection("Users").deleteMany({name:"Dor"}).then((resulte)=>{
  //   console.log(resulte);
  // });
  //
  // db.collection("Users").deleteOne({age:23}).then((resulte)=>{
  //   console.log(resulte);
  // });

  db.collection("Users").findOneAndDelete({age:24}).then((resulte)=>{
    console.log(resulte);
  });
  //database.close();
});
