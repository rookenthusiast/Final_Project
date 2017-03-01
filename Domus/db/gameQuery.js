var MongoClient = require('mongodb').MongoClient;

var GameQuery = function(){ 
  this.url = 'mongodb://localhost:27017/domus';
}

GameQuery.prototype = {
  all: function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db) {
      if(db){
        var collection = db.collection('games'); 
        collection.find().toArray(function(err, docs) {
          console.log(docs);
          onQueryFinished(docs);
        });
      }
    });
  },

  add: function(gameToAdd, onQueryFinished){
    MongoClient.connect(this.url, function(err, db) {
      if(db){
        var collection = db.collection('games');
        collection.insert(gameToAdd);
        collection.find().toArray(function(err, docs) {
          console.log(docs);
          onQueryFinished(docs);
        });
      }
    });
  }
}

module.exports = GameQuery;