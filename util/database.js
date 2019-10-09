const mongodb = require("mongodb");


let _db;

 function mongoConnect(callback) {
  mongodb.MongoClient.connect(
    'mongodb+srv://BloodShok2:0V7fTWLWfxqZIB80@cluster0-aonj5.azure.mongodb.net/node_lessons?retryWrites=true&w=majority',
    { 
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
    .then(client => {
      console.log('Connected');
      _db = client.db();
      callback(client);
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
}

/**
 * @returns { mongodb.Db }
 */
 function getDb() {
  if(_db) {
    return _db;
  }
  throw 'No database found';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
