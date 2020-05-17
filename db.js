const Mongo = require('mongodb').MongoClient;
const url = process.env.URL + ':' + process.env.PORT;
const client = new Mongo(url,  {useUnifiedTopology: true});
const dbName = 'telegram';
const collection = 'user';

let connect = async () => await client.connect();
let insert = async (id, userName, firstName, lastName) => {
    let db = await client.db(dbName);
    let query = { id: id };
    let user = { $set: { id: id, userName: userName, firstName: firstName, lastName: lastName } };

    await db.collection(collection).updateOne(query, user, { upsert: true });
}
let find = async () => {
    let db = await client.db(dbName);
    return (await db.collection(collection).find({}).toArray());
}
let close = async () => await client.close();

module.exports = {
    connect: connect,
    insert: insert,
    find: find,
    close: close
}