const { MongoClient } = require("mongodb");
const databaseUrl = "mongodb+srv://admin:12345@cluster0.beus9.mongodb.net/portal?retryWrites=true&w=majority"
const client = new MongoClient(databaseUrl, {useNewUrlParser:true,useUnifiedTopology:true})
const dbName = "portal"
let db;

function connect(callback) {
  client.connect(function (err) {
    if (err) {
      console.log("connection to mongodb failed", err);
    } else {
      console.log("succesfully connect to mongodb");
      db = client.db(dbName);
    }
    callback(err);
  });
}

function getDatabase() {
  return db;
}

module.exports = {
  connect,
  getDatabase,
};