const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
const { MongoClient } = require('mongodb');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./tutorial.model.js")(mongoose);

module.exports = db;


// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://kiwikski:<password>@cluster0.hgf3s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });
