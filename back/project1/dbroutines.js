const request = require("request");
// const fsp = require("fs").promises;



const MongoClient = require("mongodb").MongoClient;
const { atlas, appdb } = require("./config"); // atlas is our database url, appdb is info3139
const getJSONFromWWWPromise = url => {
  return new Promise((resolve, reject) => {
    request(url, (err, res, body) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(JSON.parse(body));
    });
  });
};

let db;
const loadDB = async () => {
  if (db) {
    // the first time run, this db variable won't exist, after that it should exitst if I have to make mupltiple database calls
    console.log("using established connection");
    return db;
  }
  try {
    console.log("establishing new connection to Atlas");
    const client = await MongoClient.connect(atlas, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    db = client.db(appdb);
  } catch (err) {
    console.log(err);
  }
  return db;
};
const addOne = (db, coll, doc) => db.collection(coll).insertOne(doc); // coll collection you want write, the document
const deleteAll = (db, coll) => db.collection(coll).deleteMany({});
const findOne = (db, coll, criteria) => db.collection(coll).findOne(criteria);
const findAll = (db, coll, criteria, projection) =>
  db
    .collection(coll)
    .find(criteria)
    .project(projection)
    .toArray();
module.exports = {
  loadDB,
  addOne,
  deleteAll,
  findOne,
  findAll,
  getJSONFromWWWPromise
};
