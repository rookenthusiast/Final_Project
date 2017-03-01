var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:3000/domus", function(err, db) {
  if(!err) {
    console.log("We are connected");
  } else {
    console.log("cannot find database");
  }
});